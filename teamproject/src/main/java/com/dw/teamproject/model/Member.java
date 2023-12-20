package com.dw.teamproject.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "member",
		uniqueConstraints = {@UniqueConstraint(name = "uk_member_login_id",
		columnNames = {"username"}
												)
							})
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 30 ,updatable = false)
	private String username;
	
	@Column(nullable = false, length = 100)
	private String password;
	

	@Column(nullable = false, length = 30)
	private String name;
	
	@Column(nullable = false)
	@Temporal(TemporalType.DATE)
	private String birthDate;
	
	@Column(nullable = false, length = 5)
	private String gender;
	
	@Column(nullable = false, length = 30)
	private String email;
	
	public Member() {
		super();
	}

	public Member(Long id, String username, String password, String name, String birthDate, String gender,
			String email) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.name = name;
		this.birthDate = birthDate;
		this.gender = gender;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}



}
