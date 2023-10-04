def is_palindrome(s)
    cleaned_string = s.downcase.gsub(/[^0-9a-z]/, "")
    reversed_string = cleaned_string.reverse
    return cleaned_string == reversed_string
end
