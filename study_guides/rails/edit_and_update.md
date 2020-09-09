# Routes

A controller's edit and update actions are similar to new and create, but there are important differences. Let's explore them below.

For this example, we will be working with an Albums resource. Albums have a title and year.

We will dealing with *non-nested routes*.

## `:edit`

### routes

The `albums` routes might look something like this:

```ruby
resources :albums only: [:new, :create, :index, :edit, :update]
```

### controller

Unlike with `:new`, the album is already persisted and needs to be retrieved from the database.

In this example, `:edit` is a top level resource. The route to the edit action for an album might be, for example, `albums/1/edit`. The id of the album that we want to edit is be the wildcard in our params hash, stored at a key of `:id`. With this information, we can look up the matching record in the databse and store it in an instance variable that will be available in the view that this controller action will render.

```ruby
class AlbumsController < ApplicationController
  def edit 
    @album = Album.find(params[:id])
    render :edit
  end
```

### view

This is the form that the edit action will render. We should include the following:
  1. The appropriate `action`
  2. A hidden input to change the `method`
  3. An authenticity token
  4. Pre-filled values for the inputs
  5. Correct button and header text

```html
<h1>Edit Album Form</h1>

<form action="<%= album_url(@album) %>" method="POST">
  <input type="hidden" name="_method" value="PATCH" />
  <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>">

  <input type="text" name="album[title]" value="<%= @album.title %>">
  <input type="text" name="album[year]" value="<%= @album.year %>">

  <input type="submit" value="Save Edited Album">
</form>
```

**NB: Labels may be required for your inputs in order for the feature specs to pass.**


## `:update`

If our form's action and method have been set properly, the form data will be sent to the update action of the controller via the params hash. It should look something like this:

```ruby
  <ActionController::Parameters {"_method"=>"patch", "album"=>{"title"=>"Best Album", "year"=>"1991"}, "controller"=>"albums", "action"=>"update", "id"=>"1"} permitted: false>
```

Note that the params hash contains all of the data that was entered into the form, including the updated values for `title` and `year`, as well as the necessary information to route this data to the correct controller.

Note also that `album` is a top level key in the params hash, while `title` and `year` are nested within another hash under the key of `album`. This structure exists because our form inputs have name attributes set to `album[title]` and `album[year]`. Following this naming convention for our form inputs not only keeps the form data tidily organized, but also allows us to comform to strong params as well as use mass assignment in the controller.

In `:update`, we'll again extract the id from the params hash in order to retrieve the album from the database.

We'll rely on strong params to preserve the integrity of the database as we update (*en masse*) all of the attributes of the album with form data from the params hash.

If the album exists and is successfully updated, we'll redirect to the index of all albums. Otherwise, we'll flash the errors and re-render the edit view.

### controller

```ruby
class AlbumsController < ApplicationController
  
  def update
    album = Album.find_by(id: params[:id])

    if album && album.update(album_params)
      redirect_to albums_url
    else
      flash.now[:errors] = album.errors.full_messages
      render :edit
    end
  end

  def album_params
    params.require(:album).permit(:title, :year)
  end
end
```

**NB: Additional constraints may be specified in the specs, such as restricting update permissions to the owner of the resource, the destination of the redirect upon successful update, or the error messages that should otherwise be displayed.**