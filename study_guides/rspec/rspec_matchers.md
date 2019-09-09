expect(dog.name).to eq("Frank")

* left side:

```r
expect
.to,
.to_not, not_to
```

right side:

```r
eq, be, exist, ...
have_key, include, match_array, contain_exactly ...
raise_error, raise_exception ...
be_nil, true, be_truthy, ...
be_an_instance_of, be_a, ...
change, respond_to, receive, ...
```