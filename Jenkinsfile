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
    stage('Install npm') {
        steps {
          sh "echo $PATH"
          sh 'npm install'
        }
    }
      }
        stage('Build Project') {
        steps {
          sh "echo $PATH"
          sh 'npm run build'
        }
      }
      stage ('deploy app to node'){
      steps {
       ansiblePlaybook(inventory: 'home/ubuntu/playbooks/inventory.ini', playbook: 'playbooks/roles/Deploy_tomcat/tasks/main.yml')     
     }
    }
    }
}
  

