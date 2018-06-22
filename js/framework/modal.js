class easyModal {
	show(id){
		$('#'+id).show();
		$('#'+id+'>.easy-modal').fadeIn();
		$('body').css('overflow-y','hidden');
  		$('body').css('position','fixed');
  		$('body').css('min-width','100%');
	}
	hide(id){
		$('#'+id+'>.easy-modal').slideUp(400,function(){$('#'+id).hide();});
		$('body').css('overflow-y','scroll');
  		$('body').css('position','');
  		$('body').css('min-width','320px');
	}
}
var modal = new easyModal();

// Example - how to create an easy modal:
// <modal data={getModalData()}>
//     <p> {language.feedback.description} </p>
//     <div class='form-group'>
//         <label for='textFeedback'>{language.feedback.feedbackLabel}</label>
//         <textarea type='text' class='form-control' id='textFeedback' placeholder='{language.feedback.feedbackPlaceholder}' name='text-feedback' style='height: 100px;'></textarea>
//     </div>
// </modal>
// getModalData(){
//     var modalData = {
//         id : 'modalFeedback',
//         title : language.feedback.title,
//         actionBtns : [
//             {
//                 title : language.feedback.send,
//                 action : 'alert('Feedback:' + $('#textFeedback').val());',
//                 bootstrapBtnClass : 'primary'
//             },
//             {
//                 title : language.feedback.cancel,
//                 action : 'modal.hide('modalFeedback');',
//                 bootstrapBtnClass : 'default'
//             }
//         ]
//     }
//     return modalData;
// }
