(function (){
	angular
		.module ('App')
		.controller ('ProfileCtrl', ['DataTransferService', ProfileCtrl])

	function ProfileCtrl (DataTransferService){
		var vm = this;
		Layout = DataTransferService.get ('layout');
		vm.user = Layout.user;
	}
})();