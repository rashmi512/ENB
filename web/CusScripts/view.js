/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#enbtitle').change(function(){
        if($('#enbtitle option:selected').val()!="Default"){
            $('#mydiv').show();
            $.post(
                "View",
                {eid:$('#enbtitle option:selected').val()},
                function(data){
                    $("#tabs").html(data);                
                    $('#mydiv').hide();
                },
                "text"
            );
        }
    });
});
