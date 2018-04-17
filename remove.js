function removeQuestionsForYou(){
    var blocks = document.getElementsByClassName("QuestionStoryBundle ClickthroughBundle Bundle");
    for(var i = 0; i < blocks.length; i++){
        blocks[i].remove();      
    }
}
