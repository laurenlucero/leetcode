def contains_duplicate(nums)
    duplicates = {}
    nums.each do |num|
      if duplicates[num]
        return true
      else
        duplicates[num] = 1
      end
    end
    false
  end