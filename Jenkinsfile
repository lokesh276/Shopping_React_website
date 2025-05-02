pipeline {
    agent any

    environment {
        SONARQUBE = 'SonarQube'  // Name of the SonarQube instance you configured
        SONAR_TOKEN = credentials('sonar-token')  // Your SonarQube token saved in Jenkins credentials
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install your project dependencies (e.g., npm install for Node.js)
                    sh 'npm install'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run SonarQube Scanner
                    sh '''
                        sonar-scanner \
                        -Dsonar.projectKey=YourProjectKey \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://localhost:9000 \
                        -Dsonar.login=$SONAR_TOKEN
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build your project (e.g., npm run build)
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and analysis completed successfully!'
        }
        failure {
            echo 'Build or analysis failed.'
        }
    }
}

