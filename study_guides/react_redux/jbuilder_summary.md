# jbuilder 

```ruby 
json.banana "banana" 
#without a "!", "json" something will create a property of the name

{
  banana: banana
}
```

```ruby
json.fruit do 
    json.mango "mango"
end

# "do" will typically result in your data being nested

{
  fruit: {
      mango: "mango"
  }    
}

```

```ruby
numbers = [1,2,3]

json.numbers numbers.each do |num|
    json.num num
end

{
    numbers: [
        {num:1},
        {num:2},
        {num:3}
    ]
}

# will create a key "numbers" that is an array of pojos
```

## built in methods
* end with a "!"

### json.extract
```ruby
json.extract! some_object
# extracts specified information from an object 

json.extract! @cat, :name, :age

{
    name: "harold",
    age: 8

}
```

### json.set!

```ruby
json.set! some varaible

# allow a dynamic setting of property namees

@cats.each do |cat|
    json.set! cat.id do 
        json.id cat.id
        json.name cat.name
    end
end

{
    1:{
        id: 1,
        name: "harold"
    }
    2:{
        id:2,
        name: "suzy"
    }
}
```

### json.partial!
```ruby
json.partial! "/api/cats/cat", cat: @cat

# uses a partial(api/cats/_cat.json.jbuilder)
# and passes a variable cat to the partial
```

### json.array!
* uses an array and allows you to extract info 

```ruby

json.numbers do 
    json.array!.numbers do |num|
        json.num num
    end
end

```