def is_valid(s)
    stack = []
    bracket_pairs = {
        "(" => ")",
        "[" => "]",
        "{" => "}",
    }

    for char in s.chars do
        if bracket_pairs.key?(char)
            stack.push(char)
        else
            return false if stack.empty? || bracket_pairs[stack.pop()] != char
        end
    end

    return stack.empty?
end
