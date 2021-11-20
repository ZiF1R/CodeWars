function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    let minutes = ~~(seconds / 60),
        hours = ~~(seconds / 3600),
        days = ~~(hours / 24),
        years = ~~(days / 365);
    
    minutes = minutes - (60 * ~~(minutes / 60));
    hours = hours - (24 * ~~(hours / 24));
    days = days - (365 * ~~(days / 365));
    seconds = seconds % 60;
  
    let nums = [];
    years && (nums.push(`${years} ${years > 1 ? 'years' : 'year'}`));
    days && (nums.push(`${days} ${days > 1 ? 'days' : 'day'}`));
    hours && (nums.push(`${hours} ${hours > 1 ? 'hours' : 'hour'}`));
    minutes && (nums.push(`${minutes} ${minutes > 1 ? 'minutes' : 'minute'}`));
    seconds && (nums.push(`${seconds} ${seconds > 1 ? 'seconds' : 'second'}`));
    
    if(nums.length >= 3)
      return `${nums.slice(0, nums.length - 2).join(', ')}, ${nums[nums.length - 2]} and ${nums[nums.length - 1]}`;
    else if (nums.length == 2)
      return `${nums[0]} and ${nums[1]}`;
    else return nums[0];
  }
  