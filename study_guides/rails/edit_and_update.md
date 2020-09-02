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

As `:edit` is a top level resource, the id of the album we want to change will be the wildcard in our params hash.

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

If our form's action and method have been set properly, the form data will be sent to the update action of the controller via the params hash.

Again, we'll extract the id from the params hash in order to retrieve the album from the database.

We'll rely on strong params to preserve the integrity of the database as we update the album with form data from the params hash.

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