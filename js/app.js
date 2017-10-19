var app = angular.module('Shorek', ['slickCarousel']);


app.controller('MainController', function($scope) {
    $scope.img= 'bulpoff';
    $scope.class= 'off';
 $scope.data=[
	{
		"Id": 1,
		"Title": "Lorem",
		"Image": "enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
		"ShortDesc": "Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
		"Likes": 24737,
		"Dislikes": 3420
	},
	{
		"Id": 2,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas",
		"ShortDesc": "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Likes": 89045,
		"Dislikes": 6633
	},
	{
		"Id": 3,
		"Title": "Lorem ipsum dolor sit",
		"Image": "Mauris magna. Duis dignissim tempor arcu. Vestibulum ut",
		"ShortDesc": "dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer",
		"Likes": 132,
		"Dislikes": 481
	},
	{
		"Id": 4,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "ac libero nec",
		"ShortDesc": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna.",
		"Likes": 54473,
		"Dislikes": 1262
	},
	{
		"Id": 5,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed",
		"Image": "enim commodo hendrerit. Donec porttitor tellus",
		"ShortDesc": "consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat.",
		"Likes": 90734,
		"Dislikes": 7134
	},
	{
		"Id": 6,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "Quisque",
		"ShortDesc": "Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor.",
		"Likes": 52691,
		"Dislikes": 5010
	},
	{
		"Id": 7,
		"Title": "Lorem",
		"Image": "pulvinar arcu",
		"ShortDesc": "cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus",
		"Likes": 70665,
		"Dislikes": 738
	},
	{
		"Id": 8,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "erat,",
		"ShortDesc": "egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut",
		"Likes": 72781,
		"Dislikes": 6501
	},
	{
		"Id": 9,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur",
		"Image": "eu dolor egestas rhoncus. Proin nisl sem, consequat",
		"ShortDesc": "lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin",
		"Likes": 48474,
		"Dislikes": 7241
	},
	{
		"Id": 10,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur",
		"Image": "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque",
		"ShortDesc": "eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a,",
		"Likes": 7077,
		"Dislikes": 2110
	},
	{
		"Id": 11,
		"Title": "Lorem ipsum dolor sit",
		"Image": "Morbi quis urna. Nunc quis arcu",
		"ShortDesc": "metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et",
		"Likes": 60941,
		"Dislikes": 2526
	},
	{
		"Id": 12,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur",
		"Image": "pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu",
		"ShortDesc": "sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
		"Likes": 46450,
		"Dislikes": 8947
	},
	{
		"Id": 13,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing",
		"Image": "facilisis eget, ipsum.",
		"ShortDesc": "a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis",
		"Likes": 70029,
		"Dislikes": 4017
	},
	{
		"Id": 14,
		"Title": "Lorem ipsum dolor",
		"Image": "amet, risus. Donec",
		"ShortDesc": "eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper.",
		"Likes": 71868,
		"Dislikes": 2477
	},
	{
		"Id": 15,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "dignissim. Maecenas ornare egestas ligula. Nullam",
		"ShortDesc": "vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed",
		"Likes": 25202,
		"Dislikes": 5274
	},
	{
		"Id": 16,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae",
		"ShortDesc": "cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque",
		"Likes": 25721,
		"Dislikes": 4246
	},
	{
		"Id": 17,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "ligula. Aliquam erat volutpat. Nulla",
		"ShortDesc": "lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a,",
		"Likes": 66059,
		"Dislikes": 140
	},
	{
		"Id": 18,
		"Title": "Lorem ipsum dolor",
		"Image": "metus. Aliquam",
		"ShortDesc": "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
		"Likes": 35104,
		"Dislikes": 5274
	},
	{
		"Id": 19,
		"Title": "Lorem ipsum dolor sit",
		"Image": "interdum enim non nisi. Aenean eget",
		"ShortDesc": "ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut",
		"Likes": 51782,
		"Dislikes": 6959
	},
	{
		"Id": 20,
		"Title": "Lorem ipsum dolor sit amet,",
		"Image": "tellus lorem eu metus. In",
		"ShortDesc": "lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Likes": 16594,
		"Dislikes": 6487
	},
	{
		"Id": 21,
		"Title": "Lorem ipsum dolor sit amet,",
		"Image": "dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
		"ShortDesc": "ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam",
		"Likes": 41752,
		"Dislikes": 3207
	},
	{
		"Id": 22,
		"Title": "Lorem",
		"Image": "Morbi accumsan",
		"ShortDesc": "odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin",
		"Likes": 74711,
		"Dislikes": 9205
	},
	{
		"Id": 23,
		"Title": "Lorem ipsum dolor sit amet,",
		"Image": "convallis in, cursus et, eros. Proin",
		"ShortDesc": "Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque",
		"Likes": 38868,
		"Dislikes": 5472
	},
	{
		"Id": 24,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "erat, eget tincidunt dui augue",
		"ShortDesc": "montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque",
		"Likes": 75291,
		"Dislikes": 4590
	},
	{
		"Id": 25,
		"Title": "Lorem ipsum dolor sit",
		"Image": "adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl",
		"ShortDesc": "urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
		"Likes": 42175,
		"Dislikes": 7228
	},
	{
		"Id": 26,
		"Title": "Lorem ipsum dolor sit",
		"Image": "aliquam eros turpis",
		"ShortDesc": "eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis",
		"Likes": 98468,
		"Dislikes": 1887
	},
	{
		"Id": 27,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "elit, a feugiat tellus lorem eu metus. In lorem. Donec",
		"ShortDesc": "fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis",
		"Likes": 64769,
		"Dislikes": 3701
	},
	{
		"Id": 28,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "Praesent luctus. Curabitur egestas nunc sed libero. Proin sed",
		"ShortDesc": "dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor.",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque",
		"Likes": 18202,
		"Dislikes": 4354
	},
	{
		"Id": 29,
		"Title": "Lorem ipsum dolor",
		"Image": "semper tellus id",
		"ShortDesc": "elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
		"Likes": 32700,
		"Dislikes": 6870
	},
	{
		"Id": 30,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "Morbi neque",
		"ShortDesc": "urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec",
		"Likes": 74968,
		"Dislikes": 9499
	},
	{
		"Id": 31,
		"Title": "Lorem ipsum dolor sit amet,",
		"Image": "vitae velit egestas lacinia. Sed",
		"ShortDesc": "Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa",
		"Likes": 87554,
		"Dislikes": 3845
	},
	{
		"Id": 32,
		"Title": "Lorem ipsum",
		"Image": "consectetuer",
		"ShortDesc": "nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet",
		"Likes": 39118,
		"Dislikes": 7778
	},
	{
		"Id": 33,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing",
		"Image": "semper auctor.",
		"ShortDesc": "lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam",
		"Likes": 34601,
		"Dislikes": 595
	},
	{
		"Id": 34,
		"Title": "Lorem ipsum dolor sit amet,",
		"Image": "nascetur ridiculus mus. Donec dignissim magna a",
		"ShortDesc": "facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing",
		"Likes": 70138,
		"Dislikes": 1345
	},
	{
		"Id": 35,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam",
		"ShortDesc": "dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl.",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
		"Likes": 57403,
		"Dislikes": 32
	},
	{
		"Id": 36,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "auctor vitae, aliquet nec, imperdiet nec, leo. Morbi",
		"ShortDesc": "Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus",
		"Likes": 24536,
		"Dislikes": 3813
	},
	{
		"Id": 37,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "vestibulum nec, euismod in, dolor. Fusce",
		"ShortDesc": "luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.",
		"Likes": 97848,
		"Dislikes": 1127
	},
	{
		"Id": 38,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur",
		"Image": "ipsum primis in faucibus orci luctus et ultrices",
		"ShortDesc": "amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui.",
		"Desc": "Lorem ipsum dolor sit amet,",
		"Likes": 87153,
		"Dislikes": 8328
	},
	{
		"Id": 39,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "adipiscing ligula.",
		"ShortDesc": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam",
		"Likes": 6385,
		"Dislikes": 938
	},
	{
		"Id": 40,
		"Title": "Lorem ipsum dolor",
		"Image": "ad",
		"ShortDesc": "ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend.",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien,",
		"Likes": 11475,
		"Dislikes": 2938
	},
	{
		"Id": 41,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "purus mauris a nunc. In",
		"ShortDesc": "nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus.",
		"Likes": 83339,
		"Dislikes": 1387
	},
	{
		"Id": 42,
		"Title": "Lorem",
		"Image": "Duis",
		"ShortDesc": "Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat.",
		"Likes": 1711,
		"Dislikes": 7215
	},
	{
		"Id": 43,
		"Title": "Lorem ipsum",
		"Image": "Integer id",
		"ShortDesc": "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis",
		"Likes": 5875,
		"Dislikes": 6302
	},
	{
		"Id": 44,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing",
		"Image": "tincidunt",
		"ShortDesc": "ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque",
		"Likes": 80703,
		"Dislikes": 1608
	},
	{
		"Id": 45,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed",
		"Image": "sapien molestie",
		"ShortDesc": "interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac",
		"Likes": 8204,
		"Dislikes": 4784
	},
	{
		"Id": 46,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "Sed neque. Sed eget lacus. Mauris non",
		"ShortDesc": "elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis",
		"Likes": 91952,
		"Dislikes": 2851
	},
	{
		"Id": 47,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
		"Image": "Integer vulputate, risus a",
		"ShortDesc": "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id,",
		"Likes": 31890,
		"Dislikes": 6586
	},
	{
		"Id": 48,
		"Title": "Lorem ipsum dolor sit amet, consectetuer",
		"Image": "elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum",
		"ShortDesc": "mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non,",
		"Likes": 96940,
		"Dislikes": 3437
	},
	{
		"Id": 49,
		"Title": "Lorem ipsum dolor sit amet, consectetuer adipiscing",
		"Image": "mus.",
		"ShortDesc": "Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer",
		"Likes": 36386,
		"Dislikes": 7623
	},
	{
		"Id": 50,
		"Title": "Lorem ipsum dolor sit amet,",
		"Image": "interdum enim non nisi. Aenean",
		"ShortDesc": "metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede.",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum",
		"Likes": 13998,
		"Dislikes": 3746
	},
	{
		"Id": 51,
		"Title": "Lorem ipsum dolor sit",
		"Image": "nulla magna, malesuada vel,",
		"ShortDesc": "facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
		"Desc": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et",
		"Likes": 48773,
		"Dislikes": 935
	}];

    
	$scope.incrementLikes = function(data, Id){
		data.Likes++;
	}
	$scope.incrementDislikes = function(data, Id){
		data.Dislikes++;
	}
$scope.hoverIn=function(){
   this.img ='bulpon';
   this.class="on";
}
$scope.hoveroff=function(){
    this.img ='bulpoff';
    this.class="off";
}
});


