example: Melissa and Zack
Let's say we are working out of Melissa's repository. This is the workflow:
- Zack will clone down Melissa's repo. 
- Melissa will go to her repo on GH and navigate to Settings -> Manage access -> Invite a collaborator. She will then add Zack by his username.
- Zack will go to his email, open the invite message, and accept the invitation.
Now we can start working. Let's say that Melissa navigates first and Zack is driving.
- Zack will navigate into that day's folder and work on the project, sharing his screen while Melissa navigates. 
- Once it is time to switch, Zack will use the following commands: 
`git add .`
`git commit -m "what we worked on"`
`git push`
Zack may have to enter his GH credentials. Make sure to read the response in the terminal to make sure that the push was successful.
- Once Zack has successfully pushed, Melissa will go to her repo on her local machine and use the following command: 
`git pull`
Once again, read the message to make sure that it has pulled successfully. Now Melissa should be able to see the work that Zack did.
Now they switch off and Melissa will drive while Zack navigates. When it is time to switch again, Melissa will push, and then Zack will pull. This is how they will continue throughout the whole day.
At the end of the day:
- Make sure that the last driver pushes and the last navigator pulls. That way both classmates are up to date with the final changes.
- Melissa should take away Zack's access to her repository.
- Zack should copy the day's folder out of Melissa's repo and into his own. Then, he should delete Melissa's repository off his local machine.