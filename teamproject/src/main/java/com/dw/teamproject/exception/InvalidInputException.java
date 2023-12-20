package com.dw.teamproject.exception;

public class InvalidInputException extends RuntimeException {
	
	private String fieldName;
	
	private String massage;

	public InvalidInputException(String fieldName, String massage) {
		super();
		this.fieldName = fieldName;
		this.massage = massage;
	}

	public String getFieldName() {
		return fieldName;
	}

	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}

	public String getMassage() {
		return massage;
	}

	public void setMassage(String massage) {
		this.massage = massage;
	}
	
	
}
