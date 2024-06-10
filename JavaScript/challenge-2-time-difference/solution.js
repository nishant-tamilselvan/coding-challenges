function smallestTimeDifference(times) {
    // Helper function to convert a 12-hour time string to minutes from midnight
    const convertToMinutes = (timeStr) => {
      // Separate the time part (e.g., "1:10") and the notation (e.g., "pm")
      const [timePart, notation] = [timeStr.slice(0, -2), timeStr.slice(-2)];
      // Split the time part into hours and minutes
      let [hours, minutes] = timePart.split(":").map(Number);
      // Convert 12 AM to 0 hours
      if (notation === "am" && hours === 12) hours = 0;
      // Convert PM hours to 24-hour format, except for 12 PM
      if (notation === "pm" && hours !== 12) hours += 12;
      // Return the total minutes from midnight
      return hours * 60 + minutes;
    };
  
    // Convert all times to minutes from midnight and sort them in ascending order
    const minutesArray = times.map(convertToMinutes).sort((a, b) => a - b);
  
    // Initialize the minimum difference with a large value
    const minimumDifference = minutesArray.reduce((smallestDiff, currentTime, index, array) => {
      if (index === 0) return smallestDiff;
      // Calculate the difference between the current time and the previous time
      return Math.min(smallestDiff, currentTime - array[index - 1]);
    }, Infinity);
  
    // Calculate the circular difference between the last and first times
    const circularDifference = 1440 - (minutesArray[minutesArray.length - 1] - minutesArray[0]);
  
    // Return the smallest difference found
    return Math.min(circularDifference, minimumDifference);
  }
  
  // Example usage
  const times1 = ["1:10pm", "4:30am", "5:00pm"];
  const times2 = ["11:45pm", "12:01am"];
  console.log(smallestTimeDifference(times1)); // Output: 230
  console.log(smallestTimeDifference(times2)); // Output: 16
  