<template>
  <body>
    <form action="http://localhost:3000/api/add" method="post" id="addToDatabase">
        <label for="planID">planID:</label>
        <input type="number" id="planID" name="planID"><br><br>
        <label for="overallSQFT">overall Square Feet:</label>
        <input type="number" id="overallSQFT" name="overallSQFT"><br><br>
        <label for="length">length(Ft / In)</label>
        <input type="number" id="lengthFt" name="lengthFt">
        <input type="number" id="lengthIn" name="lengthIn"><br><br>
        <label for="width">width(Ft / In)</label>
        <input type="number" id="widthFt" name="widthFt">
        <input type="number" id="widthIn" name="widthIn"><br><br>
        <label for="height">height(Ft / In)</label>
        <input type="number" id="heightFt" name="heightFt">
        <input type="number" id="heightIn" name="heightIn"><br><br>
        <label for="floors">floors</label>
        <input type="number" id="floors" name="floors"><br><br>
        
        <!-- Add more input fields for additional columns as needed -->
        
        <button type="submit">Add Data</button>
    </form>
    <a href="index.html">return to home page</a>
    <form action="/logout" method="post"> 
      <input type="submit" value="Logout"> 
    </form>
  </body>
</template>

<script>
export default {
    name: "addPlan"
}
</script>