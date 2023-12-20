package com.dw.teamproject.dto;

public class MemberLoginDto {

	
	private String username;
	

	private String password;
	
	

	public MemberLoginDto() {
		super();
	}


	public MemberLoginDto(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}



	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}
}
