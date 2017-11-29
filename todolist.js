$(document).ready(function(){

});
function addTask(){
	var new_task_card = "<div id=\"new_task_card\" class=\"card\">"+
		    "<div class=\"content\">"+
		      "<div class=\"header\">"+
		        "<div class=\"ui input\">"+
				  "<input id=\"task_name\" type=\"text\" placeholder=\"Task name\">"+
				"</div>"+
		      "</div>"+
		      "<div class=\"description\">"+
		        "<div class=\"ui input\">"+
				  "<input id=\"task_description\" type=\"text\" placeholder=\"Description...\">"+
				"</div>"+
		      "</div>"+
		    "</div>"+
		    "<div class=\"extra content\">"+
			    "<div class=\"ui two buttons\">"+
			        "<div class=\"ui teal button\" onclick=\"saveTask()\">Add</div>"+
			        "<div class=\"ui basic olive button\" onclick=\"cancel()\">Cancel</div>"+
			    "</div>"+
			"</div>"+
		  "</div>";
			$(new_task_card).prependTo("#todolist").hide().transition('swing down');
	$("#button_new").transition('drop');
}
function cancel(){
	$("#new_task_card").remove();
	$("#button_new").transition('drop');
}
function saveTask(){
	var task_name = $("#task_name").val();
	var task_description = $("#task_description").val();
	$("#new_task_card").remove();
	$("#button_new").transition('drop');
	$("#todolist").prepend("<div class=\"card\">"+
		    "<div class=\"content\">"+
		      "<div class=\"header\">"+
		        task_name+
		      "</div>"+
		      "<div class=\"description\">"+
		        task_description+
		      "</div>"+
		    "</div>"+
		    "<div class=\"extra content\">"+
		      "<div class=\"ui two buttons\">"+
		        "<div class=\"ui teal button\" onclick=\"doneTask(event)\">Done</div>"+
		        "<div class=\"ui basic red button\" onclick=\"removeTask(event)\">Remove</div>"+
		      "</div>"+
		    "</div>"+
				"<div class=\"ui dimmer\">"+
					"<div class=\"content\">"+
			    	"<div class=\"center\">"+
			        "<h2 class=\"ui inverted header\">"+
			        	"Done!"+
			        "</h2>"+
			        "<div class=\"ui red button\" onclick=\"removeDoneTask(event)\">Remove</div>"+
						"</div>"+
					"</div>"+
				"</div>"+
		  "</div>");
}
function doneTask(event){
	var current_card = $(event.target).parent().parent().parent();
	$(current_card).dimmer('show');
}
function removeTask(event){
	var current_card = $(event.target).parent().parent().parent();
	$('.ui.modal')
	  .modal({
	    closable: false,
	    onDeny: function() {
				$(this).modal('hide');
	      return false;
	    },
	    onApprove: function() {
	      $(current_card).transition('slide down');
	      setTimeout(function() {
	        $(current_card).remove();
	      }, 300);
	    }
	  })
	  .modal('show');
}
function removeDoneTask(event){
	var current_card = $(event.target).parent().parent().parent().parent();
	$('.ui.modal')
	  .modal({
	    closable: false,
	    onDeny: function() {
				$(this).modal('hide');
	      return false;
	    },
	    onApprove: function() {
	      $(current_card).transition('slide down');
	      setTimeout(function() {
	        $(current_card).remove();
	      }, 300);
	    }
	  })
}
