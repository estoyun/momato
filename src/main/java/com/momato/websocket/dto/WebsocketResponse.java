package com.momato.websocket.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class WebsocketResponse {
	private boolean success;
	private String message;
	
	
	public WebsocketResponse(String message) {
		this(true, message);
	}
	
	public WebsocketResponse(boolean success, String message) {
		this.success = success;
		this.message = message + " success";
	}
}