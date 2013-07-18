package com.spd.cq.searspartsdirect.common.model.spdasset;

public class ErrorCodeModel {
	
	private String code;
	private String condition;
	private String repairPath;
	private String repairText;
	private String path;
	private String shopPartsLink;
	private String shopPartsText;
	
	public ErrorCodeModel(String path, String code, String condition, String repairPath, String repairText, String shopPartsLink,  String shopPartsText) {
		this.path = path;
		this.code = code;
		this.condition = condition;
		this.repairPath = repairPath;
		this.repairText = repairText;
		this.shopPartsLink = shopPartsLink;
		this.shopPartsText = shopPartsText;
	}
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	
	public String getRepairPath() {
		return repairPath;
	}
	public void setRepairPath(String repairPath) {
		this.repairPath = repairPath;
	}

	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}

	public String getShopPartsLink() {
		return shopPartsLink;
	}

	public void setShopPartsLink(String shopPartsLink) {
		this.shopPartsLink = shopPartsLink;
	}

	public String getShopPartsText() {
		return shopPartsText;
	}

	public void setShopPartsText(String shopPartsText) {
		this.shopPartsText = shopPartsText;
	}

	public String getRepairText() {
		return repairText;
	}

	public void setRepairText(String repairText) {
		this.repairText = repairText;
	}
}
