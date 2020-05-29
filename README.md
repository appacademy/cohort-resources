# Welcome to App Academy! 

Here you will find all resources which will be given out throughout your time here at appacademy. In order to preview the markdown files in vs code press (control + shift + m). Each cohort's branch will only have one folder that houses all demos done in lecture. ALL OTHER RESOURCES WILL BE STORED IN THE MASTER BRANCH. If you haven't learned git yet then use this [Without Git](#without-git). Otherwise, use [How to Use Repository](#how-to-use-repository) as it serves for both students and instructors. There is also two other section which serve for students and instructors respectively. 

* [Student Section](#student-section)
* [Instructor Section](#instructor-section)

## How To Use Repository
* Clone this repository in order to have access to all resources provided throughout the cohort:``` git clone <url>```.
* DO NOT GIT INIT ONCE YOUVE CLONED THIS REPOSITORY. When you clone, all commits are preserved.
* Once cloned, if you type git branch -r, you should be able to see different branches with dates.  Look for the date which corresponds with YOUR start date and begin to track that branch: ```git checkout --track origin/<month-day-year>```. Here is where all of the respective cohort lecture demos will live.
* You can type ``` git branch ``` to see that your cohorts branch is now there and being tracked.
* Each cohort's branch will only have one folder that houses all demos done in lecture 
* ALL OTHER RESOURCES WILL BE STORED IN THE MASTER BRANCH 
* In order to have the demos from lectures you must checkout your cohorts branch ``` git checkout <month-day-year>```and run ```git pull```.
* If there are changes done to assessment_tips, foundations_remote, student_success, or study_guides you must go into master and run ```git pull``` to receive the changes.

# Student Section 

## Alumni Engagement Agreement
https://appacademy.io/alumni-engagement-agreement

## Holidays 
* New Years Day 
* Martin Luther King, Jr Day
* Memorial Day
* Independence Day
* Labor Day
* ThanksGiving Holiday
* Winter Holiday 

## Folder Breakdown  

### assessment_tips
* This folder is a compiliation of markdown files that list out tips and tricks for each assessment you will take during the in person portion.

### common bugs 
* This folder has information on common bugs that you may encounter during your time at app academy

### demos
* Remember you must go into your cohorts branch in order to see this folder ```git checkout <month-start_date-year>```.
* All demos performed during lecture can be found in this folder. 

### environment setup 
* this folder holds some information on setting up your environment

### foundations_remote
* This folder compiles all of the study guides given during the foundations portion of app academy.

### student_success
* This folder serves as a center for tips on how to maximize your success during your time here at app academy. 

### study_guides
* We've compiled a series of markdown, javascript, ruby and sql files that summarize different concepts learned throughout the course.  Look in here when you need some syntax refreshness or some quick concept summaries!

## Instructor Contact Info 
* All Instructors 
    * instructors-sf@appacademy.io
* Bay Bridge Instructors
    * bay-bridge-instructors@appacademy.io
* Golden Gate Instructors 
    * golden-gate-instructors@appacademy.io

## Without Git
![hey](./images/without_git1.png)
![hey](./images/without_git2.png)
![hey](./images/without_git3.png)
![hey](./images/without_git4.png)

# Instructor Section

* Each cohort will have its own branch.  The master branch serves as the skeleton branch.  Whenever you want to make a new branch for a cohort, branch from the master branch and name it as such: ```git branch <month-start_day-year>```. 
* Make sure to then delete all other folders except the demos folder.
* Finally, ``` git push -u origin <month-start_date-year>``` to push all branches to the remote repository
    * This will track the branch in the remote repository 
* Each cohort branch will only house the demos folder. This is done for maintainability reasons.

## Workflow
* So you want to contribute to cohort resources? you've come to the right spot
### Jira Workflow 
* [Jira Link](https://appacademyio.atlassian.net/secure/RapidBoard.jspa?rapidView=86&projectKey=IN&selectedIssue=IN-91)
#### submitting a ticket
* Submitting a ticket is quite easy. First create a new task on the Instructional Issues Backlog:
    ![label picture jira](./images/jira_workflow1.png)
    ![label picture jira](./images/jira_workflow2.png)


* There are a few necessary elements to include:

* label 
    ![label picture jira](./images/jira_workflow3.png)
    * please makre sure that you add the cohort-resources label

* Summary
    * This is the 'at a glance' view of the issue being created. Please include the course where the issue is occurring as well as a terse description (~15 words or less) of what's going wrong.

    * Example: [CR] add study guide for active record

* Description
    * Here is your chance to explain the issue as best you can in as much detail as you can muster and give us everything we need to fix the issue. A few things MUST be present:

    1. a link to the place where the issue is happening or where you are adding something
    2. a description of what you observe and why this conflicts with what you think it should be
    3. priority, in your opinion (described below)
        * To make our life even easier please provide a screenshot if applicable or even a suggestion for how the problem should be solved.

* Estimating priority
    * Please set priority in line with the following guidelines:

    * lowest - fine if we never do it, might be an improvement
    * low - should probably do at some point, it's fine for now that students see it as is, no workarounds needed, recently out of date, typos in text. Small errors that students wouldn't be confused by.
    * medium - should do before next students see it, if possible, workarounds required. Typos level mistakes in code / solutions. Many students will have to ask questions to get through.
    * high - must do before next students see it, can only partially work around, partially incorrect information
    * highest - must fix ASAP, blocks student progress, offensive, blatantly wrong information

* What to expect
    * We on the cohort resources team meet regularly and prioritize issues to fix. We will evaluate them based on urgency and our availability.
    * When we do go over the issue, we might ask you questions about your issue. 

### git Workflow 
* Before contributing please make sure that you follow the steps above to submit an issue and assign yourself to it once it has been placed in the selected for development section
* First of all, NEVER push to master.
* Demos during lecture will follow the instructions below [Lecture Demos](#lecture-demos)
* Any contributions to the master branch will follow the following workflow: 
1. git pull master
2. git checkout -b `<description-of-your-contribution>`
3. add contribution to the branch (add, commit, etc...)
4. git checkout master 
5. git pull master
6. git checkout `<description-of-your-contribution>`
7. git rebase master 
8. git push 
    * do command that git tells you to do
9. create pull request on git
10. assign a reviewer (someone on cohort resources team) 

## Multi-day Demos 
* Multiday demos will live in their own repository.  In other words, they will not live within cohort resources.  A link should be placed in the demos folder README that links students to the demos repository.

## Lecture Demos
*  Demos from lecture live within the demos repository.  For every demo, checkout the appropriate branch for the cohort ```git checkout <month-start_date-year>```, cd into the demo directory, and create a folder that will house the demo ``` wXdX-(name of demo) ```.  After the demos completion, add,commit and push your work.
