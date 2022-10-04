$("document").ready(function(){
	getAudience();
});

function getAudience(){
	$.ajax({    
	    url : 'https://g2cbaa8b17db98e-mhjt5avpexvy4xs4.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/audience/audience',
	   // data : { id : 123 },
	    type : 'GET',
	    dataType : 'json',

	    success : function(qwe) {
	    	//console.log(rta);
	    	let items=qwe.items;
	    	$("#resultado").empty();
	    	for(i=0;i<items.length;i++){
	    		$("#resultado").append(items[i].id+" "+items[i].name+" "+items[i].owner+" "+items[i].capacity+" "+items[i].category_id);
	    		$("#resultado").append(" <button onclick='getAudienceById("+items[i].id+")'>Actualizar</button>");
				$("#resultado").append(" <button onclick='deleteAudience("+items[i].id+")'>Borrar!</button>");
	    		$("#resultado").append("<br>");
	    	}

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});
}

function getData(){
	let idA=$("#idAudience").val();
	let ownerA=$("#owner").val();
	let nameA=$("#name").val();
	let capacityA=$("#capacity").val();
	let categoryA=$("#category").val();


// :id, :owner, :capacity, :category_id, :id, :owner, :capacity, :category_id, :name 
	let data={
		id : idA,
		owner: ownerA,
		name: nameA,
		capacity: capacityA,
		category_id:categoryA
	}

	return data;
}

function cleanData(){
	$("#idAudience").val("");
	$("#owner").val("");
	$("#name").val("");
	$("#capacity").val("");
	$("#category").val("");
}

function saveAudience(){

	let myData=getData();
	let dataToSend=JSON.stringify(myData);

	$.ajax({    
	    url : 'https://g2cbaa8b17db98e-mhjt5avpexvy4xs4.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/audience/audience',
	   data : dataToSend,
	    type : 'POST',
//	    dataType : 'json',
		contentType:'application/json',
	    success : function(dg) {
	    	cleanData();
	    	getAudience();

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});
}

function getAudienceById(idAudience){
	$.ajax({    
	    url : 'https://g2cbaa8b17db98e-mhjt5avpexvy4xs4.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/audience/audience/'+idAudience,
	   // data : { id : 123 },
	    type : 'GET',
	    dataType : 'json',

	    success : function(qwe) {
	    	//console.log(rta);
	    	let item=qwe.items[0];
	    	$("#idAudience").val(item.id);
			$("#owner").val(item.owner);
			$("#name").val(item.name);
			$("#capacity").val(item.capacity);
			$("#category").val(item.category_id);
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});
}

function updateAudience(){
	let myData=getData();
	let dataToSend=JSON.stringify(myData);

	$.ajax({    
	    url : 'https://g2cbaa8b17db98e-mhjt5avpexvy4xs4.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/audience/audience',
	   	data : dataToSend,
	    type : 'PUT',
//	    dataType : 'json',
		contentType:'application/json',
	    success : function(dg) {
	    	cleanData();
	    	getAudience();

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});
}

function deleteAudience(idToDelete){

	let data={
		id:idToDelete
	};
	let dataToSend=JSON.stringify(data);

	$.ajax({    
	    url : 'https://g2cbaa8b17db98e-mhjt5avpexvy4xs4.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/audience/audience',
	   	data : dataToSend,
	    type : 'DELETE',
//	    dataType : 'json',
		contentType:'application/json',
	    success : function(dg) {
	    	cleanData();
	    	getAudience();

	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    },
	    complete : function(xhr, status) {
	      //  alert('Petición realizada');
	    }
	});

}

