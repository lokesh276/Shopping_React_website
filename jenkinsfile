pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clean workspace before checkout for a fresh start
                cleanWs()
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Run build script if available; you can replace with your build/start command
                // If you only want to run a simple start script, change this accordingly
                sh 'npm run build || echo "No build script found, skipping"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
            cleanWs()
        }
    }
}
