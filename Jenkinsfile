pipeline {
  agent any
 
  tools {nodejs "node"}
 
  stages {
    stage('Init') {
      steps {
        sh 'npm config ls'
      }
    }
    stage('Check Out Code Repository') {
      checkout scm
    }
    stage('Build Project') {
        sh 'npm install'
    }
  }
}
