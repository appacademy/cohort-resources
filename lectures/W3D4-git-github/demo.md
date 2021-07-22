# Git Lecture Demos

# Local repos and commits

Create a repo

```bash
mkdir my_shapes
cd my_shapes
git init
```

Show that a `.git` directory was added.
Point out git PS1

See the current status

```bash
git status
```

Make a file and show status

```bash
touch circle.rb
git status
```

Make a `Circle` class with a `radius` instance variable.
We like that code so let's commit.

```bash
git status
git add circle.rb
git status
```

Talk about commit messages:

+ Start with a verb
+ Imperative mood
+ Please no emojis
+ No ending punctuation

```bash
git commit -m "Add Circle class with #initialize"
git status
git log
```

Now, let's add more instance variables to `Circle` (add x and y for
positions).

After that, see the `changes not staged for commit`, add them, and commit
them.

```bash
git status
git add circle.rb
git status
git commit -m "Add x and y instance variables to circle class"
git status
git log
```

Now let's make some 3d shapes and put them in a folder.

```bash
mkdir 3d_shapes
git status
```

Nothing! Git doesn't track directories.

Let's add a file inside it.

```bash
touch 3d_shapes/sphere.rb
git status
```

Git sees that there is stuff in there, but not going to care what's inside
of it yet. It will just tell us there are things in this directory and
they are all untracked.

Now let's create some more files and add them

```bash
touch 3d_shape/cube.rb
git status
```

Notice that git still isn't tracking things in this directory.

```bash
git add 3d_shape/sphere.rb
git status
```

Once we track something in this directory, git will look at the rest of
its contents and let us know the status of the contents in there.

Let's add the rest now. We can also bulk add everything in a directory by
giving the git `add` command the directory

```bash
git add 3d_shape
git status
git commit -m "Add 3d shapes Cube and Sphere

New classes are needed to represent the different functionality of cubes
and spheres."
```

The description should tell the `what and why`, not the `how`. It is
totally optional but it's for future you and other developers.
Descriptions can be very useful when you want to know why a change
happened. The title and changes in the commit should tell you `what` so
the description gives context. What was the main reason for the change?

[Relevant article to read.](https://chris.beams.io/posts/git-commit/)

```bash
git status
git log
```

Yay!

# Resetting Demo

Add `Circle#area` that returns the area of the circle. (`Math::PI * radius ** 2`)
Add classes to the two 3d shapes. (e.g. `volume`)

Now let's commit our changes. We can add everything in the current
directory and below by saying

```bash
git add .
git status
```

Well, maybe we don't actually want to commit the changes to circle yet.
And plus, they are pretty unrelated to the changes we made in the other
two files. Let's remove circle from being staged for this commit.

```bash
git reset circle.rb
git status
```

Great! Now let's commit.

```bash
git commit -m "Add classes and #initialize for 3d shapes"
```

Now, we could add and commit the circle so it has its own commit, but
let's say that we actually don't want the changes we made to `circle` at
all! Let's completely remove them forever and go back to the most recent
commit.

**Be VERY CAREFUL with this command.** There is no way to revert back. It's
the `rm` of git.

```bash
git reset --hard
git status
```

Check the file. Bye forever.

Now some coolness of `reset`.

```bash
ls
rm -r *
ls # oh no!
git reset --hard
ls # ahhh
```

# Remotes Demo

Let's connect to a remote. Set up a repo on GitHub.

```bash
git remote
git remote add origin <url>
git remote
```

See all the things

```bash
git remote -v
```

Now we can push our commits to GitHub

```bash
git push -u origin master
```

The `-u` flag is short for [upstream][git push -u flag]. The `-u` automatically sets up that upstream for you,
linking your repo to the central one. Git will know what you want to `push` and `pull`
without any arguments. We will set our default remote push location for the `master` branch.

This would work without it too. Just allows us to say:

```bash
git push
```

[git push -u flag]: https://stackoverflow.com/questions/5561295/what-does-git-push-u-mean

Look around github:

+ Commits (change views)
+ Files with most recent commit
+ Git blame?

Let's actually add that `area` method to `Circle` and push:

```bash
git add circle
git status
git commit -m "Add method to circle that calculates the area"
git status
git log
git push
```

NOW show them how to clone a repo using the cohort resources as an example

```bash
git clone <url>
cd repo_name
```

Now show them how to pull down changes (i.e when a demo is uploaded) with `git pull`!


```bash
git pull
git log # might not be any changes
```

Done!

# Branching Demo

First, draw the diagram.

We may want to keep our master branch clean if we have a website that's
depending on master to work. But we also want to be able to push our
recent changes to GitHub so we can keep them safe.

Checkout a branch:

```bash
git branch
git checkout -b my-branch
git branch
```

Make some changes to it. Add, commit, git log.

Now we are done with `my-branch` and want to incorporate it into master.

This is where merge comes in. We need to be on the branch that is
receiving the merged information.

```bash
git checkout master
git merge my-branch
git log
git push
```

Now we have merged and pushed the info from our branch, we don't need it
anymore. Let's delete it.

```bash
git branch
git branch -d my-branch
git branch
```

Done!
