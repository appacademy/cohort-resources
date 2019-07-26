require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton
  #this class allows us to connect to the database and run sql calls with heredocs
  #grab information that we need
  def initialize
    #remember that you first have to create the database
    super('plays.db') 
    self.type_translation = true
    self.results_as_hash = true #this returns the results from the database as a hash
    #if you dont do this line then you'll return a 2d array from the database
  end
end

class Play
  attr_accessor :id, :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays") #we must do .instance because
    #PlayDBConnection is a singleton. .execute is the command that allows us to run 
    # a query call to the database

    #data will return a hash within an array
    #thats why we have to map of the array.
    #for every hash in the array, we are creating an new instance of Play
    data.map { |datum| Play.new(datum) }
  end

  def initialize(options)
    #options is a hash.  
    #you can think of it as a row from the plays table,
    #where each key represents a column name

    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if self.id
    #this is an example of a heredoc 
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    self.id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlayDBConnection.instance.execute(<<-SQL, self.title, self.year, self.playwright_id, self.id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end
