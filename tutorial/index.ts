async function checkFormURL(baseURL: string, missingCharPlaceholder: string) {
  const possibleChars =
    "\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0A\x0B\x0C\x0D\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F";
  const validURLs = [];

  for (const char of possibleChars) {
    const testURL = baseURL.replace(missingCharPlaceholder, char);
    try {
      const response = await fetch(testURL);
      if (response.ok) {
        // response.ok checks if the status code is in the range 200-299
        console.log(`Found a potentially valid URL: ${testURL}`);
        validURLs.push(testURL);
        // Optionally, you could try to fetch the text content and look for specific content
        // to further verify if it's the correct application form.
        // const text = await response.text();
        // if (text.includes('your application form specific text')) {
        //   console.log(`Confirmed: ${testURL} seems to be the application form.`);
        // }
      } else {
        // Log non-OK status codes for debugging if needed
        // console.log(`Request to ${testURL} failed with status: ${response.status}`);
      }
    } catch (error) {
      // Ignore errors, as most URLs will be invalid (e.g., network issues)
      // console.error(`Error fetching ${testURL}:`, error);
    }
  }

  if (validURLs.length > 0) {
    console.log("\nPotentially valid application form URLs found:");
    validURLs.forEach((url) => console.log(url));
  } else {
    console.log(
      "\nNo potentially valid application form URLs found with the tested characters."
    );
  }
}

const baseURL =
  "https://docs.google.com/forms/d/1F4ZnJHh7x「?」4ZjbEfe3BLuvpIrcg_8YsQG_AvSBJ_9PY/viewform";
const missingCharPlaceholder = "「?」";

checkFormURL(baseURL, missingCharPlaceholder);
