pipeline {
  agent any
   stages {
      stage ('deploy app to node'){
      steps {
       ansiblePlaybook(inventory: '/home/ubuntu/playbooks/inventory.ini', playbook: '/home/ubuntu/playbooks/playbook.yml')     
     }
    }
   }
}
  

