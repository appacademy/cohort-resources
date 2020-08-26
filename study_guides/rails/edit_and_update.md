# Routes

A controller's edit and update actions are similar to new and create, but there are important differences. Let's explore them below.

For this example, assume we are using the following schema:

* Albums have a title and year

And we will dealing with *non-nested routes*.

## `:edit`

### routes

The albums routes might look something like this:

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
  3. Pre-filled values for the inputs
  4. Correct button and header text

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

If our form's action and method have been set properly, the form data will be sent to the update action of the controller and stored in the params hash.

We can extract the id of the album as well as the values of the form's inputs from the params hash.

We'll rely on our strong params to preserve the integrity of the database.

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