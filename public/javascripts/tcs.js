console.log('hi tcs.js');
function validateEmail() {
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var email = $('#loginEmail').val();
    console.log(email);
    var isValid = re.test(email);
    //http://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    console.log(isValid);
    if (!isValid){
    	$('.warningEmail').show();
    	return false;
    }
    return true;
}
$(document).ready(function(){
    var rate1 = 0;
    var isClick1 = false;
    var rate2 = 0;
    var isClick2 = false;
    var rate3 = 0;
    var isClick3 = false;
    $("p").click(function(){
    });
    $("#review1 > span").hover(
        function(){
            var i = $(this).index();
            drawStar(1,i-1);
        },
        function(){
            if(!isClick1)
                drawStar(1,0);
            else
                drawStar(1,rate1);
        }
    );
    $("#review2 > span").hover(
        function(){
            var i = $(this).index();
            drawStar(2,i-1);
        },
        function(){
            if(!isClick2)
                drawStar(2,0);
            else
                drawStar(2,rate2);
        }
    );
    $("#review3 > span").hover(
        function(){
            var i = $(this).index();
            drawStar(3,i-1);
        },
        function(){
            if(!isClick3)
                drawStar(3,0);
            else
                drawStar(3,rate3);
        }
    );
    function drawStar(review,rate){
        switch(rate){
            case 1:
                $('#review'+review+' > #star1').html('&#9733;');
                $('#review'+review+' > #star2').html('&#9734;');
                $('#review'+review+' > #star3').html('&#9734;');
                $('#review'+review+' > #star4').html('&#9734;');
                $('#review'+review+' > #star5').html('&#9734;');
                $('#review'+review+' > #text').html("<b> I hate it </b>");
                break;
            case 2:
                $('#review'+review+' > #star1').html('&#9733;');
                $('#review'+review+' > #star2').html('&#9733;');
                $('#review'+review+' > #star3').html('&#9734;');
                $('#review'+review+' > #star4').html('&#9734;');
                $('#review'+review+' > #star5').html('&#9734;');
                $('#review'+review+' > #text').html("<b> I don't like it </b>");
                break;
            case 3:
                $('#review'+review+' > #star1').html('&#9733;');
                $('#review'+review+' > #star2').html('&#9733;');
                $('#review'+review+' > #star3').html('&#9733;');
                $('#review'+review+' > #star4').html('&#9734;');
                $('#review'+review+' > #star5').html('&#9734;');
                $('#review'+review+' > #text').html("<b> It's okay </b>");
                break;
            case 4:
                $('#review'+review+' > #star1').html('&#9733;');
                $('#review'+review+' > #star2').html('&#9733;');
                $('#review'+review+' > #star3').html('&#9733;');
                $('#review'+review+' > #star4').html('&#9733;');
                $('#review'+review+' > #star5').html('&#9734;');
                $('#review'+review+' > #text').html('<b> I like it </b>');
                break;
            case 5:
                $('#review'+review+' > #star1').html('&#9733;');
                $('#review'+review+' > #star2').html('&#9733;');
                $('#review'+review+' > #star3').html('&#9733;');
                $('#review'+review+' > #star4').html('&#9733;');
                $('#review'+review+' > #star5').html('&#9733;');
                $('#review'+review+' > #text').html('<b> I love it </b>');
                break;
            case 6:
                //don't do anything if hover on #text
                break;
            default:
                $('#review'+review+' > #star1').html('&#9734;');
                $('#review'+review+' > #star2').html('&#9734;');
                $('#review'+review+' > #star3').html('&#9734;');
                $('#review'+review+' > #star4').html('&#9734;');
                $('#review'+review+' > #star5').html('&#9734;');
                $('#review'+review+' > #text').html('');
                break;
        }
    }
    $("#review1 > span").click(
        function(){
            isClick1 = true;
            rate1 = $(this).index() - 1;
            $('#review1 > a').show();
        }
    );
    $("#review2 > span").click(
        function(){
            isClick2 = true;
            rate2 = $(this).index() - 1;
            $('#review2 > a').show();
        }
    );
    $("#review3 > span").click(
        function(){
            isClick3 = true;
            rate3 = $(this).index() - 1;
            $('#review3 > a').show();
        }
    );
    $("#review1 > a").click(
        function(){
            isClick1 = false;
            rate1 = 0;
            $('#review1 > a').hide();
            drawStar(1,0);
        }
    );
    $("#review2 > a").click(
        function(){
            isClick2 = false;
            rate2 = 0;
            $('#review2 > a').hide();
            drawStar(2,0);
        }
    );
    $("#review3 > a").click(
        function(){
            isClick3 = false;
            rate3 = 0;
            $('#review3 > a').hide();
            drawStar(3,0);
        }
    );
});