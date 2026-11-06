// pipeline {
//     agent any

//     stages {
//         stage('Install Dependencies') {
//             steps {
//                 bat 'npm install'
//                 bat 'npx playwright install'
//             }
//         }

//         stage('Run Tests') {
//             steps {
//                 script {
//                     def status = bat(script: 'npx playwright test"', returnStatus: true)
//                     if (status != 0) {
//                         echo "Tests failed, but continuing to generate reports..."
//                     }
//                 }
//             }
//         }
//     }

//     post {
//         always {
//             echo 'Generating HTML reports...'


//             publishHTML(target: [
//                 reportDir: 'playwright-report',
//                 reportFiles: 'index.html',
//                 reportName: 'Playwright HTML Report',
//                 alwaysLinkToLastBuild: true,
//                 keepAll: true,
//                  alwaysLinkToLastBuild: true,
//                 allowMissing: true,
//                 linkRelative: false
//             ])

        
//         }
//     }
// }


pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Playwright Shards') {
            parallel {
                stage('Shard 1') {
                    agent any

                    steps {
                        catchError(
                            buildResult: 'FAILURE',
                            stageResult: 'FAILURE'
                        ) {
                            checkout scm
                            bat 'npm ci'
                            bat 'npx playwright install chromium'
                            bat 'npx playwright test --shard=1/2'
                        }
                    }

                    post {
                        always {
                            stash(
                                name: 'shard1-blob',
                                includes: 'blob-report/**',
                                allowEmpty: true
                            )
                        }
                    }
                }

                stage('Shard 2') {
                    agent any

                    steps {
                        catchError(
                            buildResult: 'FAILURE',
                            stageResult: 'FAILURE'
                        ) {
                            checkout scm
                            bat 'npm ci'
                            bat 'npx playwright install chromium'
                            bat 'npx playwright test --shard=2/2'
                        }
                    }

                    post {
                        always {
                            stash(
                                name: 'shard2-blob',
                                includes: 'blob-report/**',
                                allowEmpty: true
                            )
                        }
                    }
                }
            }
        }

        stage('Merge Reports') {
            agent any

            steps {
                checkout scm
                bat 'npm ci'

                // Collect reports from both shards.
                unstash 'shard1-blob'
                unstash 'shard2-blob'

                // Merge Blob reports into HTML.
                bat '''
                    if exist blob-report\\*.zip (
                        npx playwright merge-reports --reporter html blob-report
                    ) else (
                        echo No Blob reports were generated.
                    )
                '''
            }

            post {
                always {
                    archiveArtifacts(
                        artifacts: 'blob-report/**,playwright-report/**',
                        allowEmptyArchive: true
                    )

                    publishHTML(target: [
                        reportName: 'Playwright Combined Report',
                        reportDir: 'playwright-report',
                        reportFiles: 'index.html',
                        keepAll: true,
                        alwaysLinkToLastBuild: true,
                        allowMissing: true
                    ])
                }
            }
        }
    }
}

