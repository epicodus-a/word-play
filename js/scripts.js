$().ready(function(){
  $(".sentence-form").submit(function(e){
    e.preventDefault();

    let sentence = $("#sentence").val();
    if (sentence){
      let sentenceArray = sentence.split(" ");
      let longerThanThree = sentenceArray.filter(word=>word.length>=3);
      let stringLongerThanThree = longerThanThree.reverse().join();
      $(".output").append("<p class='lead mt-5'> Here are the reversed longer than three words in you sentence: "+ stringLongerThanThree+"</p>");
  }else{
      $(".output").append("<p class='lead mt-5 text-danger'> Please enter some human words</p>");
  }
  })
})
