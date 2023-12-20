package com.dw.teamproject.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "mbslide")
public class MBSlide {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name  ="url",nullable=false )
	private String url;
	
	@Column(name = "text1",nullable = false)
	private String text1;
	
	@Column(name = "text2", nullable = false)
	private String text2;
	
	@Column(name = "text3", nullable = false)
	private String text3;

	public MBSlide() {
		super();
	}

	public MBSlide(long id, String url, String text1, String text2, String text3) {
		super();
		this.id = id;
		this.url = url;
		this.text1 = text1;
		this.text2 = text2;
		this.text3 = text3;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getText1() {
		return text1;
	}

	public void setText1(String text1) {
		this.text1 = text1;
	}

	public String getText2() {
		return text2;
	}

	public void setText2(String text2) {
		this.text2 = text2;
	}

	public String getText3() {
		return text3;
	}

	public void setText3(String text3) {
		this.text3 = text3;
	}
	
	
}
