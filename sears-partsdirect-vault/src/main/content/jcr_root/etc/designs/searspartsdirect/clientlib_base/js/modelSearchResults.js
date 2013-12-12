
function modelSearchResults(searchModPar,pathTaken){

var urlName="http://api.developer.sears.com/v1/productdetails?store=Sears&partNumber=002VA66926112P&apikey=59d93b2f3a8387e7e92b2fe18686f843&apiVersion=v3&contentType=json";

   $.ajax( {
			type : "GET",
			cache : false,
			dataType : "jsonp",
			url : urlName,
     		success: function(data) {

                var jsonResponse=JSON.stringify(data);

                // overriding jsonResponse with dummy data as API is not available at present
                jsonResponse=[{"id":0,"modelNumber":"Model0","formattedModelNumber":"Model0","modelDescription":"ModelDescription0","brandId":"brandId0","brandName":"Brand0","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand0","categoryId":"CategoryId0","categoryName":"Category0","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType0","pages":0,"parts":0,"soldCount":0,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":1,"modelNumber":"Model1","formattedModelNumber":"Model1","modelDescription":"ModelDescription1","brandId":"brandId1","brandName":"Brand1","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand1","categoryId":"CategoryId1","categoryName":"Category1","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType1","pages":1,"parts":1,"soldCount":10,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":2,"modelNumber":"Model2","formattedModelNumber":"Model2","modelDescription":"ModelDescription2","brandId":"brandId2","brandName":"Brand2","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand2","categoryId":"CategoryId2","categoryName":"Category2","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType2","pages":2,"parts":2,"soldCount":20,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":3,"modelNumber":"Model3","formattedModelNumber":"Model3","modelDescription":"ModelDescription3","brandId":"brandId3","brandName":"Brand3","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand3","categoryId":"CategoryId3","categoryName":"Category3","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType3","pages":3,"parts":3,"soldCount":30,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":4,"modelNumber":"Model4","formattedModelNumber":"Model4","modelDescription":"ModelDescription4","brandId":"brandId4","brandName":"Brand4","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand4","categoryId":"CategoryId4","categoryName":"Category4","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType4","pages":4,"parts":4,"soldCount":40,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":5,"modelNumber":"Model5","formattedModelNumber":"Model5","modelDescription":"ModelDescription5","brandId":"brandId5","brandName":"Brand5","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand5","categoryId":"CategoryId5","categoryName":"Category5","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType5","pages":5,"parts":5,"soldCount":50,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":0,"modelNumber":"Model0","formattedModelNumber":"Model0","modelDescription":"ModelDescription0","brandId":"brandId0","brandName":"Brand0","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand0","categoryId":"CategoryId0","categoryName":"Category0","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType0","pages":0,"parts":0,"soldCount":0,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":1,"modelNumber":"Model1","formattedModelNumber":"Model1","modelDescription":"ModelDescription1","brandId":"brandId1","brandName":"Brand1","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand1","categoryId":"CategoryId1","categoryName":"Category1","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType1","pages":1,"parts":1,"soldCount":10,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":2,"modelNumber":"Model2","formattedModelNumber":"Model2","modelDescription":"ModelDescription2","brandId":"brandId2","brandName":"Brand2","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand2","categoryId":"CategoryId2","categoryName":"Category2","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType2","pages":2,"parts":2,"soldCount":20,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":3,"modelNumber":"Model3","formattedModelNumber":"Model3","modelDescription":"ModelDescription3","brandId":"brandId3","brandName":"Brand3","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand3","categoryId":"CategoryId3","categoryName":"Category3","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType3","pages":3,"parts":3,"soldCount":30,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":4,"modelNumber":"Model4","formattedModelNumber":"Model4","modelDescription":"ModelDescription4","brandId":"brandId4","brandName":"Brand4","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand4","categoryId":"CategoryId4","categoryName":"Category4","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType4","pages":4,"parts":4,"soldCount":40,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":5,"modelNumber":"Model5","formattedModelNumber":"Model5","modelDescription":"ModelDescription5","brandId":"brandId5","brandName":"Brand5","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand5","categoryId":"CategoryId5","categoryName":"Category5","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType5","pages":5,"parts":5,"soldCount":50,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":0,"modelNumber":"Model0","formattedModelNumber":"Model0","modelDescription":"ModelDescription0","brandId":"brandId0","brandName":"Brand0","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand0","categoryId":"CategoryId0","categoryName":"Category0","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType0","pages":0,"parts":0,"soldCount":0,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":1,"modelNumber":"Model1","formattedModelNumber":"Model1","modelDescription":"ModelDescription1","brandId":"brandId1","brandName":"Brand1","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand1","categoryId":"CategoryId1","categoryName":"Category1","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType1","pages":1,"parts":1,"soldCount":10,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":2,"modelNumber":"Model2","formattedModelNumber":"Model2","modelDescription":"ModelDescription2","brandId":"brandId2","brandName":"Brand2","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand2","categoryId":"CategoryId2","categoryName":"Category2","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType2","pages":2,"parts":2,"soldCount":20,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":3,"modelNumber":"Model3","formattedModelNumber":"Model3","modelDescription":"ModelDescription3","brandId":"brandId3","brandName":"Brand3","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand3","categoryId":"CategoryId3","categoryName":"Category3","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType3","pages":3,"parts":3,"soldCount":30,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":4,"modelNumber":"Model4","formattedModelNumber":"Model4","modelDescription":"ModelDescription4","brandId":"brandId4","brandName":"Brand4","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand4","categoryId":"CategoryId4","categoryName":"Category4","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType4","pages":4,"parts":4,"soldCount":40,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":5,"modelNumber":"Model5","formattedModelNumber":"Model5","modelDescription":"ModelDescription5","brandId":"brandId5","brandName":"Brand5","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand5","categoryId":"CategoryId5","categoryName":"Category5","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType5","pages":5,"parts":5,"soldCount":50,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":0,"modelNumber":"Model0","formattedModelNumber":"Model0","modelDescription":"ModelDescription0","brandId":"brandId0","brandName":"Brand0","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand0","categoryId":"CategoryId0","categoryName":"Category0","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType0","pages":0,"parts":0,"soldCount":0,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":1,"modelNumber":"Model1","formattedModelNumber":"Model1","modelDescription":"ModelDescription1","brandId":"brandId1","brandName":"Brand1","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand1","categoryId":"CategoryId1","categoryName":"Category1","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType1","pages":1,"parts":1,"soldCount":10,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":2,"modelNumber":"Model2","formattedModelNumber":"Model2","modelDescription":"ModelDescription2","brandId":"brandId2","brandName":"Brand2","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand2","categoryId":"CategoryId2","categoryName":"Category2","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType2","pages":2,"parts":2,"soldCount":20,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":3,"modelNumber":"Model3","formattedModelNumber":"Model3","modelDescription":"ModelDescription3","brandId":"brandId3","brandName":"Brand3","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand3","categoryId":"CategoryId3","categoryName":"Category3","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType3","pages":3,"parts":3,"soldCount":30,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":4,"modelNumber":"Model4","formattedModelNumber":"Model4","modelDescription":"ModelDescription4","brandId":"brandId4","brandName":"Brand4","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand4","categoryId":"CategoryId4","categoryName":"Category4","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType4","pages":4,"parts":4,"soldCount":40,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":5,"modelNumber":"Model5","formattedModelNumber":"Model5","modelDescription":"ModelDescription5","brandId":"brandId5","brandName":"Brand5","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand5","categoryId":"CategoryId5","categoryName":"Category5","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType5","pages":5,"parts":5,"soldCount":50,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":0,"modelNumber":"Model0","formattedModelNumber":"Model0","modelDescription":"ModelDescription0","brandId":"brandId0","brandName":"Brand0","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand0","categoryId":"CategoryId0","categoryName":"Category0","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType0","pages":0,"parts":0,"soldCount":0,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":1,"modelNumber":"Model1","formattedModelNumber":"Model1","modelDescription":"ModelDescription1","brandId":"brandId1","brandName":"Brand1","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand1","categoryId":"CategoryId1","categoryName":"Category1","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType1","pages":1,"parts":1,"soldCount":10,"addedDate":null,"updatedDate":null,"hasManuals":true,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":2,"modelNumber":"Model2","formattedModelNumber":"Model2","modelDescription":"ModelDescription2","brandId":"brandId2","brandName":"Brand2","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand2","categoryId":"CategoryId2","categoryName":"Category2","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType2","pages":2,"parts":2,"soldCount":20,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":3,"modelNumber":"Model3","formattedModelNumber":"Model3","modelDescription":"ModelDescription3","brandId":"brandId3","brandName":"Brand3","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand3","categoryId":"CategoryId3","categoryName":"Category3","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType3","pages":3,"parts":3,"soldCount":30,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":4,"modelNumber":"Model4","formattedModelNumber":"Model4","modelDescription":"ModelDescription4","brandId":"brandId4","brandName":"Brand4","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand4","categoryId":"CategoryId4","categoryName":"Category4","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType4","pages":4,"parts":4,"soldCount":40,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="},{"id":5,"modelNumber":"Model5","formattedModelNumber":"Model5","modelDescription":"ModelDescription5","brandId":"brandId5","brandName":"Brand5","formattedBrandName":null,"seoFormattedBrandName":"SEOBrand5","categoryId":"CategoryId5","categoryName":"Category5","formattedCategoryName":null,"seoFormattedProductTypeName":"SEOProductType5","pages":5,"parts":5,"soldCount":50,"addedDate":null,"updatedDate":null,"hasManuals":false,"modelSubComponentsLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700?searchedModel=1230&blt=","modelDiagramLink":"http://www.searspartsdirect.com/partsdirect/part-model/Peerless-Parts/Faucet-Parts/Model-1230/0796/0909700/00053310/00001?blt=06&prst=&shdMod="}];

                var len = Object.keys(jsonResponse).length;
					$( ".searchCount0" ).append(len);
                    $( ".searchCount1" ).append("1-25 of "+len);
    			for(var i=0; i< len; i++){
                    if(i==25){return;}
                    if(i%10==0&&i!=0)
                    {
						$( ".modelSearchResultsItemBkg" ).append(""+
						"<div class=\"row-fluid modelSearchResultsNotSureMsg\">"+
							"<div><h4>Not sure which model is yours?</h4>"+
								"<p>Check your product for its unique model number or contact us at <span><a>1-800-252-1698.</a></span></p>"+
							"</div>"+
						"</div>");
                    }
                   		var resultDetail=jsonResponse[Object.keys(jsonResponse)[i]];
       					$( ".modelSearchResultsItemBkg" ).append(""+
                        "<div class=\"row-fluid modelSearchResultsItem\">"+
                            "<div class=\"span4 modelSearchResultsItemLeft\">"+
                                "<p>Model <span><a href=\""+resultDetail.modelSubComponentsLink+"\">"+resultDetail.modelNumber+"</a></span> ("+resultDetail.parts+" parts)</p>"+
                                "<span class=\"hidden-phone\"><a>View manuals</a><a>Repair	Help</a></span>"+
                            "</div>"+
                            "<div class=\"span3 modelSearchResultsItemCenter\">"+
                                "<p>"+resultDetail.brandName+"</p>"+
                                "<p>"+resultDetail.categoryName+"</p>"+
                            "</div>"+
                            "<div class=\"span3 hidden-phone modelSearchResultsItemRight\">"+
                                "<button class=\"new-btn new-btn-search\">Shop Parts</button>"+
                            "</div>"+
                        "</div>");
   				 }
            },
            error: function(){
                console.log("Failed to retrieve data from server");
            }
    });

}