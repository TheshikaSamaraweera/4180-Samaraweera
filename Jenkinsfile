pipeline {
    agent any 
   
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/TheshikaSamaraweera/4180-Samaraweera'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t theshikanavod/e-commerce-frontend:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'e-commerce-password', variable: 'mypsswrd')]) {
   
               bat'docker login -u theshikanavod -p ${mypsswrd}'
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push theshikanavod/e-commerce-frontend:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}