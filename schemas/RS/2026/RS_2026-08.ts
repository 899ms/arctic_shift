interface RedditPost {
	_meta?: {
		edited_title?: string, // 2898540/45188707 (6.41%)
		is_edited?: boolean, // 2057711/45188707 (4.55%)
		removal_type?: "deleted"|"reddit"|"moderator"|"automod_filtered"|"content_takedown"|"author"|"copyright_takedown"|"community_ops", // 10586587/45188707 (23.43%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 9823957/45188707 (21.74%)
		was_initially_deleted?: boolean, // 762640/45188707 (1.69%)
	}, // 45188707/45491721 (99.33%)
	ad_business?: null, // 803574/45491721 (1.77%)
	ad_promoted_user_posts?: null, // 803574/45491721 (1.77%)
	ad_supplementary_text_md?: null|string, // 803574/45491721 (1.77%)
	ad_user_targeting?: null, // 803574/45491721 (1.77%)
	adserver_click_url?: null, // 803574/45491721 (1.77%)
	adserver_imp_pixel?: null, // 803574/45491721 (1.77%)
	all_awardings: [],
	allow_live_comments: boolean,
	app_store_data?: null, // 803574/45491721 (1.77%)
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	author: string,
	author_cakeday?: boolean, // 120814/45491721 (0.27%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 1127663/3002718 (37.55%)
		e: "text"|"emoji",
		t?: string, // 1875055/3002718 (62.45%)
		u?: string, // 1127663/3002718 (37.55%)
	}[], // 44755886/45491721 (98.38%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 44755886/45491721 (98.38%)
	author_fullname?: string, // 44755886/45491721 (98.38%)
	author_id?: string|null, // 803574/45491721 (1.77%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 44755886/45491721 (98.38%)
	author_premium?: boolean, // 44755886/45491721 (98.38%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	call_to_action?: string, // 707405/45491721 (1.56%)
	campaign_id?: null, // 803574/45491721 (1.77%)
	can_gild: boolean,
	can_mod_post: boolean,
	category: null|"diy_and_crafts"|"entertainment",
	clicked: boolean,
	content_categories: null|("gaming"|"drawing_and_painting"|"photography"|"diy_and_crafts"|"entertainment"|"comics"|"writing"|"music"|"videos")[],
	contest_mode: boolean,
	created: number,
	created_utc: number,
	crosspost_parent?: string, // 3580457/45491721 (7.87%)
	crosspost_parent_list?: {
		all_awardings: [],
		allow_live_comments: boolean,
		approved_at_utc: null,
		approved_by: null,
		archived: boolean,
		author: string,
		author_cakeday?: boolean, // 10443/3578460 (0.29%)
		author_flair_background_color: null|string,
		author_flair_css_class: null|string,
		author_flair_richtext?: {
			a?: string, // 80549/211562 (38.07%)
			e: "text"|"emoji",
			t?: string, // 131013/211562 (61.93%)
			u?: string, // 80549/211562 (38.07%)
		}[], // 3567787/3578460 (99.70%)
		author_flair_template_id: null|string,
		author_flair_text: null|string,
		author_flair_text_color: null|"dark"|"light",
		author_flair_type?: "text"|"richtext", // 3567787/3578460 (99.70%)
		author_fullname?: string, // 3567787/3578460 (99.70%)
		author_is_blocked: boolean,
		author_patreon_flair?: boolean, // 3567787/3578460 (99.70%)
		author_premium?: boolean, // 3567787/3578460 (99.70%)
		awarders: [],
		banned_at_utc: null,
		banned_by: null,
		can_gild: boolean,
		can_mod_post: boolean,
		category: null|"diy_and_crafts"|"animals"|"entertainment"|"drawing_and_painting",
		clicked: boolean,
		content_categories: null|("gaming"|"drawing_and_painting"|"comics"|"photography"|"writing"|"diy_and_crafts"|"entertainment"|"music"|"videos")[],
		contest_mode: boolean,
		created: number,
		created_utc: number,
		discussion_type: null|"CHAT",
		distinguished: null|"moderator"|"admin",
		domain: string,
		downs: number,
		edited: boolean|number,
		gallery_data?: {
			items: {
				caption?: string, // 1356247/4525928 (29.97%)
				id: number,
				is_deleted: boolean,
				media_id: string,
				outbound_url?: string, // 9154/4525928 (0.20%)
			}[],
		}|null, // 799703/3578460 (22.35%)
		gilded: number,
		gildings: {
		},
		hidden: boolean,
		hide_score: boolean,
		id: string,
		is_created_from_ads_ui: boolean,
		is_crosspostable: boolean,
		is_gallery?: boolean, // 799703/3578460 (22.35%)
		is_meta: boolean,
		is_original_content: boolean,
		is_reddit_media_domain: boolean,
		is_robot_indexable: boolean,
		is_self: boolean,
		is_video: boolean,
		likes: null,
		link_flair_background_color: string|null,
		link_flair_css_class: null|string,
		link_flair_richtext: {
			a?: string, // 98015/684139 (14.33%)
			e: "text"|"emoji",
			t?: string, // 586124/684139 (85.67%)
			u?: string, // 98015/684139 (14.33%)
		}[],
		link_flair_template_id?: string, // 1581129/3578460 (44.18%)
		link_flair_text: null|string,
		link_flair_text_color: "dark"|"light"|null,
		link_flair_type: "text"|"richtext",
		location_lat?: null|number, // 3459648/3578460 (96.68%)
		location_long?: null|number, // 3459648/3578460 (96.68%)
		location_name?: null|"Oslo, Oslo fylke"|"City of El Paso, Texas"|"Virginia Beach, Virginia", // 3459648/3578460 (96.68%)
		locked: boolean,
		media: null|{
			event_id?: "wqafn68z94tk", // 1/612819 (0.00%)
			oembed?: {
				author_name?: string, // 52156/405070 (12.88%)
				author_url?: string, // 52151/405070 (12.87%)
				cache_age?: number, // 24/405070 (0.01%)
				description?: string, // 2490/405070 (0.61%)
				height?: number|null, // 405003/405070 (99.98%)
				html: string,
				mean_alpha?: number, // 3/405070 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 400141/405070 (98.78%)
				thumbnail_url?: string, // 405016/405070 (99.99%)
				thumbnail_width?: number, // 400141/405070 (98.78%)
				title?: string, // 405037/405070 (99.99%)
				type: "video"|"rich",
				url?: string, // 44/405070 (0.01%)
				version: "1.0",
				width?: number, // 405003/405070 (99.98%)
			}, // 405070/612819 (66.10%)
			reddit_video?: {
				bitrate_kbps?: number, // 207215/207748 (99.74%)
				dash_url?: string, // 207733/207748 (99.99%)
				duration?: number, // 207733/207748 (99.99%)
				fallback_url?: string, // 207733/207748 (99.99%)
				has_audio?: boolean, // 206427/207748 (99.36%)
				height: number|null,
				hls_url?: string, // 207733/207748 (99.99%)
				is_gif?: boolean, // 207733/207748 (99.99%)
				scrubber_media_url?: string, // 207733/207748 (99.99%)
				transcoding_message?: string, // 15/207748 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 207748/612819 (33.90%)
			type?: string, // 405071/612819 (66.10%)
		},
		media_embed: {
			content?: string, // 405004/3578460 (11.32%)
			height?: number, // 405004/3578460 (11.32%)
			scrolling?: boolean, // 405004/3578460 (11.32%)
			width?: number, // 405004/3578460 (11.32%)
		},
		media_metadata?: {
			[key: string]: {
				dashUrl?: string, // 3060/4593483 (0.07%)
				e?: "Image"|"AnimatedImage"|"RedditVideo", // 4589353/4593483 (99.91%)
				hlsUrl?: string, // 3060/4593483 (0.07%)
				id?: string, // 4589353/4593483 (99.91%)
				isGif?: boolean, // 3060/4593483 (0.07%)
				m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 4586293/4593483 (99.84%)
				o?: {
					u: string,
					x: number,
					y: number,
				}[], // 2971990/4593483 (64.70%)
				p?: {
					u: string,
					x: number,
					y: number,
				}[], // 4586293/4593483 (99.84%)
				s?: {
					gif?: string, // 193744/4586293 (4.22%)
					mp4?: string, // 193744/4586293 (4.22%)
					u?: string, // 4392549/4586293 (95.78%)
					x: number,
					y: number,
				}, // 4586293/4593483 (99.84%)
				status: "valid"|"unprocessed"|"failed",
				x?: number, // 3060/4593483 (0.07%)
				y?: number, // 3060/4593483 (0.07%)
			},
		}|null, // 830322/3578460 (23.20%)
		media_only: boolean,
		mod_note: null,
		mod_reason_by: null,
		mod_reason_title: null,
		mod_reports: [],
		name: string,
		no_follow: boolean,
		num_comments: number,
		num_crossposts: number,
		num_reports: null,
		outbound_link?: {
			created: null|number,
			expiration: null|number,
			url: string,
		}, // 2443679/3578460 (68.29%)
		over_18: boolean,
		permalink: string,
		pinned: boolean,
		poll_data?: {
			is_prediction: boolean,
			options: {
				id: string,
				text: string,
				vote_count?: number, // 411/13939 (2.95%)
			}[],
			prediction_status: null,
			resolved_option_id: null,
			total_stake_amount: null,
			total_vote_count: number,
			tournament_id: null,
			user_selection: null,
			user_won_amount: null,
			vote_updates_remained: null,
			voting_end_timestamp: number,
		}|boolean|null, // 5551/3578460 (0.16%)
		post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"gallery"|"video", // 1758416/3578460 (49.14%)
		preview?: {
			enabled: boolean,
			images: {
				id: string,
				resolutions: {
					height: number,
					url: string,
					width: number,
				}[],
				source: {
					height: number,
					url: string,
					width: number,
				},
				variants: {
					gif?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 11930/1758416 (0.68%)
					mp4?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 11930/1758416 (0.68%)
					nsfw?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 908250/1758416 (51.65%)
					obfuscated?: {
						resolutions: {
							height: number,
							url: string,
							width: number,
						}[],
						source: {
							height: number,
							url: string,
							width: number,
						},
					}, // 913810/1758416 (51.97%)
				},
			}[],
			reddit_video_preview?: {
				bitrate_kbps?: number, // 349282/349319 (99.99%)
				dash_url?: string, // 349300/349319 (99.99%)
				duration?: number, // 349300/349319 (99.99%)
				fallback_url?: string, // 349300/349319 (99.99%)
				has_audio?: boolean, // 340825/349319 (97.57%)
				height: number|null,
				hls_url?: string, // 349300/349319 (99.99%)
				is_gif?: boolean, // 349300/349319 (99.99%)
				scrubber_media_url?: string, // 349300/349319 (99.99%)
				transcoding_message?: string, // 19/349319 (0.01%)
				transcoding_status: "completed"|"failed",
				width: number|null,
			}, // 349319/1758416 (19.87%)
		}, // 1758416/3578460 (49.14%)
		pwls: null|number,
		quarantine: boolean,
		removal_reason: null|"legal",
		removed_by: null,
		removed_by_category: null|"deleted"|"reddit"|"moderator"|"content_takedown"|"automod_filtered"|"author"|"copyright_takedown",
		report_reasons: null,
		saved: boolean,
		score: number,
		secure_media: null|{
			event_id?: "wqafn68z94tk", // 1/612819 (0.00%)
			oembed?: {
				author_name?: string, // 52156/405070 (12.88%)
				author_url?: string, // 52151/405070 (12.87%)
				cache_age?: number, // 24/405070 (0.01%)
				description?: string, // 2490/405070 (0.61%)
				height?: number|null, // 405003/405070 (99.98%)
				html: string,
				mean_alpha?: number, // 3/405070 (0.00%)
				provider_name: string,
				provider_url: string,
				thumbnail_height?: number, // 400141/405070 (98.78%)
				thumbnail_url?: string, // 405016/405070 (99.99%)
				thumbnail_width?: number, // 400141/405070 (98.78%)
				title?: string, // 405037/405070 (99.99%)
				type: "video"|"rich",
				url?: string, // 44/405070 (0.01%)
				version: "1.0",
				width?: number, // 405003/405070 (99.98%)
			}, // 405070/612819 (66.10%)
			reddit_video?: {
				bitrate_kbps?: number, // 207215/207748 (99.74%)
				dash_url?: string, // 207733/207748 (99.99%)
				duration?: number, // 207733/207748 (99.99%)
				fallback_url?: string, // 207733/207748 (99.99%)
				has_audio?: boolean, // 206427/207748 (99.36%)
				height: number|null,
				hls_url?: string, // 207733/207748 (99.99%)
				is_gif?: boolean, // 207733/207748 (99.99%)
				scrubber_media_url?: string, // 207733/207748 (99.99%)
				transcoding_message?: string, // 15/207748 (0.01%)
				transcoding_status: "completed"|"error",
				width: number|null,
			}, // 207748/612819 (33.90%)
			type?: string, // 405071/612819 (66.10%)
		},
		secure_media_embed: {
			content?: string, // 405004/3578460 (11.32%)
			height?: number, // 405004/3578460 (11.32%)
			media_domain_url?: string, // 405004/3578460 (11.32%)
			scrolling?: boolean, // 405004/3578460 (11.32%)
			width?: number, // 405004/3578460 (11.32%)
		},
		selftext: string,
		selftext_html: string|null,
		send_replies: boolean,
		spoiler: boolean,
		stickied: boolean,
		subreddit: string,
		subreddit_id: string,
		subreddit_name_prefixed: string,
		subreddit_subscribers: number,
		subreddit_type: "public"|"user"|"restricted"|"archived",
		suggested_sort: null|"qa"|"confidence"|"new"|"top"|"old"|"live"|"controversial"|"random",
		thumbnail: string|null,
		thumbnail_height?: number|null, // 3576779/3578460 (99.95%)
		thumbnail_width?: number|null, // 3576779/3578460 (99.95%)
		title: string,
		top_awarded_type: null,
		total_awards_received: number,
		treatment_tags: [],
		ups: number,
		upvote_ratio: number,
		url: string,
		url_overridden_by_dest?: string, // 2526835/3578460 (70.61%)
		user_reports: [],
		view_count: null,
		visited: boolean,
		websocket_url?: string, // 3459648/3578460 (96.68%)
		wls: null|number,
	}[], // 3580457/45491721 (7.87%)
	discussion_type: null,
	distinguished: null|"moderator"|"admin",
	domain: string,
	domain_override?: null|string, // 803574/45491721 (1.77%)
	downs: number,
	edited: boolean|number,
	embed_type?: null, // 803574/45491721 (1.77%)
	embed_url?: null, // 803574/45491721 (1.77%)
	events?: [], // 803574/45491721 (1.77%)
	eventsOnRender?: [], // 803574/45491721 (1.77%)
	gallery_data?: {
		items: {
			call_to_action?: string, // 122803/23527810 (0.52%)
			caption?: string, // 7315405/23527810 (31.09%)
			display_url?: string, // 129696/23527810 (0.55%)
			id: number,
			is_deleted: boolean,
			media_id: string,
			outbound_url?: string, // 159262/23527810 (0.68%)
			product?: {
				description: string,
				price: string,
				title: string,
			}, // 43752/23527810 (0.19%)
		}[],
	}|null, // 6703570/45491721 (14.74%)
	gilded: number,
	gildings: {
	},
	hidden: boolean,
	hide_score: boolean,
	href_url?: string, // 803574/45491721 (1.77%)
	id: string,
	impression_id?: null, // 803574/45491721 (1.77%)
	impression_id_str?: null, // 803574/45491721 (1.77%)
	is_blank?: boolean, // 803574/45491721 (1.77%)
	is_created_from_ads_ui: boolean,
	is_crosspostable: boolean,
	is_gallery?: boolean, // 6703570/45491721 (14.74%)
	is_meta: boolean,
	is_original_content: boolean,
	is_reddit_media_domain: boolean,
	is_robot_indexable: boolean,
	is_self: boolean,
	is_survey_ad?: boolean, // 803574/45491721 (1.77%)
	is_video: boolean,
	likes: null,
	link_flair_background_color: string|null,
	link_flair_css_class: null|string,
	link_flair_richtext: {
		a?: string, // 1502450/10405193 (14.44%)
		e: "text"|"emoji",
		t?: string, // 8902743/10405193 (85.56%)
		u?: string, // 1502450/10405193 (14.44%)
	}[],
	link_flair_template_id?: string, // 21116718/45491721 (46.42%)
	link_flair_text: null|string,
	link_flair_text_color: "dark"|"light"|null,
	link_flair_type: "text"|"richtext",
	location_lat?: null, // 45395985/45491721 (99.79%)
	location_long?: null, // 45395985/45491721 (99.79%)
	location_name?: null, // 45395985/45491721 (99.79%)
	locked: boolean,
	media: null|{
		oembed?: {
			author_name?: string, // 610370/2753068 (22.17%)
			author_url?: string, // 610386/2753068 (22.17%)
			cache_age?: number, // 224/2753068 (0.01%)
			description?: string, // 19604/2753068 (0.71%)
			height?: number, // 2752411/2753068 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2742475/2753068 (99.62%)
			thumbnail_url: string,
			thumbnail_width?: number, // 2742475/2753068 (99.62%)
			title?: string, // 2752378/2753068 (99.97%)
			type: "video"|"rich",
			url?: string, // 1383/2753068 (0.05%)
			version: "1.0",
			width?: number, // 2752411/2753068 (99.98%)
		}, // 2753068/4210099 (65.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 1451269/1457031 (99.60%)
			dash_url?: string, // 1451269/1457031 (99.60%)
			duration?: number, // 1451269/1457031 (99.60%)
			fallback_url?: string, // 1451269/1457031 (99.60%)
			has_audio?: boolean, // 1451259/1457031 (99.60%)
			height: number|null,
			hls_url?: string, // 1451269/1457031 (99.60%)
			is_gif?: boolean, // 1451269/1457031 (99.60%)
			scrubber_media_url?: string, // 1451269/1457031 (99.60%)
			transcoding_message?: string, // 5762/1457031 (0.40%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1457031/4210099 (34.61%)
		type?: string, // 2753068/4210099 (65.39%)
	},
	media_embed: {
		content?: string, // 2749451/45491721 (6.04%)
		height?: number, // 2749451/45491721 (6.04%)
		scrolling?: boolean, // 2749451/45491721 (6.04%)
		width?: number, // 2749451/45491721 (6.04%)
	},
	media_metadata?: {
		[key: string]: {
			dashUrl?: string, // 13949/24008222 (0.06%)
			e?: "Image"|"AnimatedImage"|"RedditVideo", // 23837607/24008222 (99.29%)
			hlsUrl?: string, // 13949/24008222 (0.06%)
			id?: string, // 23837607/24008222 (99.29%)
			isGif?: boolean, // 13949/24008222 (0.06%)
			m?: "image/jpg"|"image/png"|"image/gif"|"image/jpeg", // 23823658/24008222 (99.23%)
			o?: {
				u: string,
				x: number,
				y: number,
			}[], // 12947917/24008222 (53.93%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[], // 23823658/24008222 (99.23%)
			s?: {
				gif?: string, // 470551/23823658 (1.98%)
				mp4?: string, // 470551/23823658 (1.98%)
				u?: string, // 23353107/23823658 (98.02%)
				x: number,
				y: number,
			}, // 23823658/24008222 (99.23%)
			status: "valid"|"unprocessed"|"failed",
			x?: number, // 13949/24008222 (0.06%)
			y?: number, // 13949/24008222 (0.06%)
		},
	}|null, // 7060410/45491721 (15.52%)
	media_only: boolean,
	mobile_ad_url?: string, // 803574/45491721 (1.77%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments: number,
	num_crossposts: number,
	num_reports: null,
	original_link?: null, // 803574/45491721 (1.77%)
	outbound_link?: {
		created?: null|number, // 27365006/28168580 (97.15%)
		expiration?: null|number, // 27365006/28168580 (97.15%)
		url?: string, // 27365006/28168580 (97.15%)
	}, // 28168580/45491721 (61.92%)
	over_18: boolean,
	permalink: string,
	pinned: boolean,
	poll_data?: boolean|{
		is_prediction: boolean,
		options: {
			id: string,
			text: string,
			vote_count?: number, // 17443/175028 (9.97%)
		}[],
		prediction_status: null,
		resolved_option_id: null,
		total_stake_amount: null,
		total_vote_count: number,
		tournament_id: null,
		user_selection: null,
		user_won_amount: null,
		vote_updates_remained: null,
		voting_end_timestamp: number,
	}|null, // 2818049/45491721 (6.19%)
	post_hint?: "image"|"rich:video"|"hosted:video"|"link"|"self"|"video", // 19274689/45491721 (42.37%)
	preview?: {
		enabled: boolean,
		images: {
			id: string,
			resolutions: {
				height: number,
				url: string,
				width: number,
			}[],
			source: {
				height: number,
				url: string,
				width: number,
			},
			variants: {
				gif?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 355319/19309477 (1.84%)
				mp4?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 355319/19309477 (1.84%)
				nsfw?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 9045963/19309477 (46.85%)
				obfuscated?: {
					resolutions: {
						height: number,
						url: string,
						width: number,
					}[],
					source: {
						height: number,
						url: string,
						width: number,
					},
				}, // 9142434/19309477 (47.35%)
			},
		}[],
		reddit_video_preview?: {
			bitrate_kbps?: number, // 2089253/2090168 (99.96%)
			dash_url?: string, // 2089271/2090168 (99.96%)
			duration?: number, // 2089271/2090168 (99.96%)
			fallback_url?: string, // 2089271/2090168 (99.96%)
			has_audio?: boolean, // 2080818/2090168 (99.55%)
			height: number|null,
			hls_url?: string, // 2089271/2090168 (99.96%)
			is_gif?: boolean, // 2089271/2090168 (99.96%)
			scrubber_media_url?: string, // 2089271/2090168 (99.96%)
			transcoding_message?: string, // 897/2090168 (0.04%)
			transcoding_status: "completed"|"failed",
			width: number|null,
		}, // 2090168/19309477 (10.82%)
	}, // 19309477/45491721 (42.45%)
	priority_id?: null, // 803574/45491721 (1.77%)
	product_ids?: [], // 803574/45491721 (1.77%)
	promo_layout?: null|"PRODUCT"|"SPOTLIGHT_VIDEO", // 803574/45491721 (1.77%)
	promoted?: boolean, // 803574/45491721 (1.77%)
	promoted_by?: null, // 803574/45491721 (1.77%)
	promoted_display_name?: null, // 803574/45491721 (1.77%)
	promoted_url?: null, // 803574/45491721 (1.77%)
	pwls: null|number,
	quarantine: boolean,
	removal_reason: null|"legal",
	removed_by: null,
	removed_by_category: null|"reddit"|"moderator"|"automod_filtered"|"deleted"|"content_takedown"|"author"|"community_ops",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	secure_media: null|{
		oembed?: {
			author_name?: string, // 610370/2753068 (22.17%)
			author_url?: string, // 610386/2753068 (22.17%)
			cache_age?: number, // 224/2753068 (0.01%)
			description?: string, // 19604/2753068 (0.71%)
			height?: number, // 2752411/2753068 (99.98%)
			html: string,
			provider_name: string,
			provider_url: string,
			thumbnail_height?: number, // 2742475/2753068 (99.62%)
			thumbnail_url: string,
			thumbnail_width?: number, // 2742475/2753068 (99.62%)
			title?: string, // 2752378/2753068 (99.97%)
			type: "video"|"rich",
			url?: string, // 1383/2753068 (0.05%)
			version: "1.0",
			width?: number, // 2752411/2753068 (99.98%)
		}, // 2753068/4210099 (65.39%)
		reddit_video?: {
			bitrate_kbps?: number, // 1451269/1457031 (99.60%)
			dash_url?: string, // 1451269/1457031 (99.60%)
			duration?: number, // 1451269/1457031 (99.60%)
			fallback_url?: string, // 1451269/1457031 (99.60%)
			has_audio?: boolean, // 1451259/1457031 (99.60%)
			height: number|null,
			hls_url?: string, // 1451269/1457031 (99.60%)
			is_gif?: boolean, // 1451269/1457031 (99.60%)
			scrubber_media_url?: string, // 1451269/1457031 (99.60%)
			transcoding_message?: string, // 5762/1457031 (0.40%)
			transcoding_status: "completed"|"error",
			width: number|null,
		}, // 1457031/4210099 (34.61%)
		type?: string, // 2753068/4210099 (65.39%)
	},
	secure_media_embed: {
		content?: string, // 2749451/45491721 (6.04%)
		height?: number, // 2749451/45491721 (6.04%)
		media_domain_url?: string, // 2749451/45491721 (6.04%)
		scrolling?: boolean, // 2749451/45491721 (6.04%)
		width?: number, // 2749451/45491721 (6.04%)
	},
	selftext: string,
	send_replies: boolean,
	show_media?: boolean, // 803574/45491721 (1.77%)
	sk_ad_network_data?: null, // 803574/45491721 (1.77%)
	spoiler: boolean,
	stickied: boolean,
	subcaption?: string, // 17022/45491721 (0.04%)
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_subscribers: number,
	subreddit_type: "public"|"user"|"restricted",
	suggested_sort: null|"qa"|"new"|"confidence"|"top"|"old"|"live"|"controversial"|"random",
	third_party_trackers?: [], // 803574/45491721 (1.77%)
	third_party_tracking?: null, // 803574/45491721 (1.77%)
	third_party_tracking_2?: null, // 803574/45491721 (1.77%)
	thumbnail: string|null,
	thumbnail_height?: number|null, // 45143098/45491721 (99.23%)
	thumbnail_width?: number|null, // 45143098/45491721 (99.23%)
	title: string,
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	ups: number,
	upvote_ratio: number,
	url: string,
	url_overridden_by_dest?: string, // 28193026/45491721 (61.97%)
	user_reports: [],
	view_count: null,
	visited: boolean,
	websocket_url?: string, // 45395985/45491721 (99.79%)
	wls: null|number,
}