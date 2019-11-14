pipeline {
  agent any
 
  stages {
    stage('Init') {
      steps {
        sh 'npm config ls'
      }
    }
    stage('Check Out Code Repository') {
        steps {
          checkout scm
        }
    }
    stage('Build Project') {
        steps {
          sh "echo $PATH"
          sh 'npm install'
        }
      stage('Build Project') {
        steps {
          sh "echo $PATH"
          sh 'npm run serve'
    }
        stage('Build Project') {
        steps {
          sh "echo $PATH"
          sh 'npm build'
        }
      }
  }
}
