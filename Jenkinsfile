pipeline {
  agent any
 
      stage ('deploy app to node'){
      steps {
       ansiblePlaybook(inventory: 'home/ubuntu/playbooks/inventory.ini', playbook: 'home/ubuntu/playbooks/roles/Deploy_tomcat/tasks/main.yml')     
     }
    }
    }
}
  

