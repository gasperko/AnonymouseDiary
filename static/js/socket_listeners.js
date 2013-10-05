;(function () {
    

    socket.on("login_success", function () {

        sessionStorage['user_logged'] = "true";
        var navigate_to = sessionStorage['navigate_to'];
        $.mobile.changePage("#" + navigate_to);
        if (navigate_to == "chat")
            $("#chat_box").show();

    });

    var chat_messages = 1;
    socket.on("chat_message", function (objChatMessage) {

        objChatMessage = JSON.parse(objChatMessage);
        $("#chat_content").append(["<li class='ui-li ui-li-static ui-btn-up-a ui-corner-top'><h3 class='ui-li-heading'>", objChatMessage.from, "</h3><p class='ui-li-desc' id='chat_m_" + chat_messages + "'></p><p class='ui-li-desc'></p></li>"].join(''));
        $("#chat_m_" + chat_messages + "").text(objChatMessage.message);
        ++chat_messages;
    });

    console.log(s, " << the socket");

    socket.on("chat_image", function (objChatImage) {

        objChatImage = JSON.parse(objChatImage);
        console.log(objChatImage);
        $("#chat_content").append(["<li class='ui-li ui-li-static ui-btn-up-a ui-corner-top'><h3 class='ui-li-heading'>" + objChatImage.from + "</h3><p class='ui-li-desc'><img src='", objChatImage.imageData.image_data, "' alt='image' /></p><p class='ui-li-desc'></p></li>"].join(''));


        $("#" + objChatImage.ImageData.timestape).on("vclick", function (e) {


            e.preventDefault();
        });

    });


}());

	
