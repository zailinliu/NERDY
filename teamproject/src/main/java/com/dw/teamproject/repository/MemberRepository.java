package com.dw.teamproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dw.teamproject.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long>{
	
	Member findByUsername(String username);
}
