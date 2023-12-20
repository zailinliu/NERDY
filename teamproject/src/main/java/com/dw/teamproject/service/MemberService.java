package com.dw.teamproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dw.teamproject.exception.InvalidInputException;
import com.dw.teamproject.dto.MemberLoginDto;
import com.dw.teamproject.dto.MemberDto;
import com.dw.teamproject.model.Member;
import com.dw.teamproject.repository.MemberRepository;

import jakarta.transaction.Transactional;

@Transactional
@Service
public class MemberService {
	
	private final MemberRepository memberRepository;

	@Autowired
	public MemberService(MemberRepository memberRepository) {
		super();
		this.memberRepository = memberRepository;
	}
	
	public String signUp(MemberDto memberDto) {
		
		Member member = memberRepository.findByUsername(memberDto.getUsername());
		if(member != null) {
//			return "이미 등록된 ID입니다.";
			throw new InvalidInputException("username", "이미 등록된 ID입니다.");
		}
		
		member = new Member(
				null,
				memberDto.getUsername(),
				memberDto.getPassword(),
				memberDto.getName(),
				memberDto.getBirthDate(),
				memberDto.getGender(),
				memberDto.getEmail()
				);
		memberRepository.save(member);
		return "회원가입이 완료되었습니다.";
	}
	
	public String login(MemberLoginDto memberLoginDto) {
		Member member = memberRepository.findByUsername(memberLoginDto.getUsername());
		if(member != null && member.getPassword().matches(memberLoginDto.getPassword())) {
			return member.getUsername();
		} else {
			throw new InvalidInputException("loginId","ID 또는 password가 올바르지 않습니다.");
		}
	}
}
