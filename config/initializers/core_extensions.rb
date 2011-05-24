# Extend Core Ruby classes

require 'string_extensions'
require 'float_extensions'
require 'fixnum_extensions'
require 'date_extensions'

class String
  include RG::CoreExtensions::StringExtensions
end

class Float
  include RG::CoreExtensions::FloatExtensions
end

class Fixnum
  include RG::CoreExtensions::FixnumExtensions
end

class Bignum
  include RG::CoreExtensions::FixnumExtensions
end

class Date
  include RG::CoreExtensions::DateExtensions
end
