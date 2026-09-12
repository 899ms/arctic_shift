interface RedditComment {
	_meta?: {
		is_edited?: boolean, // 19391691/367184681 (5.28%)
		removal_type?: "removed"|"deleted"|"removed by reddit", // 15649271/367184681 (4.26%)
		retrieved_2nd_on: number,
		was_deleted_later?: boolean, // 13845846/367184681 (3.77%)
		was_initially_deleted?: boolean, // 1808808/367184681 (0.49%)
	}, // 367184681/367543312 (99.90%)
	all_awardings: [],
	approved_at_utc: null,
	approved_by: null,
	archived: boolean,
	associated_award: null,
	author: string,
	author_cakeday?: boolean, // 1187606/367543312 (0.32%)
	author_flair_background_color: null|string,
	author_flair_css_class: null|string,
	author_flair_richtext?: {
		a?: string, // 27990053/64201387 (43.60%)
		e: "text"|"emoji",
		t?: string, // 36211334/64201387 (56.40%)
		u?: string, // 27990053/64201387 (43.60%)
	}[], // 354304727/367543312 (96.40%)
	author_flair_template_id: null|string,
	author_flair_text: null|string,
	author_flair_text_color: null|"dark"|"light",
	author_flair_type?: "text"|"richtext", // 354304727/367543312 (96.40%)
	author_fullname?: string, // 352509694/367543312 (95.91%)
	author_is_blocked: boolean,
	author_patreon_flair?: boolean, // 354304727/367543312 (96.40%)
	author_premium?: boolean, // 354304727/367543312 (96.40%)
	awarders: [],
	banned_at_utc: null,
	banned_by: null,
	body: string,
	can_gild: boolean,
	can_mod_post: boolean,
	collapsed: boolean,
	collapsed_because_crowd_control: null,
	collapsed_reason: null|"comment score below threshold",
	collapsed_reason_code: null|"DELETED"|"LOW_SCORE",
	comment_type: null,
	controversiality: number,
	created: number,
	created_utc: number,
	distinguished: null|"moderator"|"admin",
	downs: number,
	editable?: boolean, // 708070/367543312 (0.19%)
	edited: boolean|number,
	gilded: number,
	gildings: {
	},
	id: string,
	is_submitter: boolean,
	likes: null,
	link_author?: string, // 43801844/367543312 (11.92%)
	link_id: string,
	link_permalink?: string, // 43801844/367543312 (11.92%)
	link_title?: string, // 43801844/367543312 (11.92%)
	link_url?: string, // 43801844/367543312 (11.92%)
	locked: boolean,
	media_metadata?: {
		[key: string]: {
			e?: "Image"|"AnimatedImage", // 8172205/12449274 (65.64%)
			ext?: string, // 119194/12449274 (0.96%)
			id?: string, // 8172205/12449274 (65.64%)
			m?: "image/jpeg"|"image/png"|"image/gif", // 8172205/12449274 (65.64%)
			p?: {
				u: string,
				x: number,
				y: number,
			}[]|null, // 8172205/12449274 (65.64%)
			s?: {
				gif?: string, // 710223/8172205 (8.69%)
				mp4?: string, // 710223/8172205 (8.69%)
				u?: string, // 7461982/8172205 (91.31%)
				x: number,
				y: number,
			}, // 8172205/12449274 (65.64%)
			status: "valid"|"invalid"|"unprocessed",
			t?: "giphy", // 119194/12449274 (0.96%)
		},
	}, // 12449137/367543312 (3.39%)
	mod_note: null,
	mod_reason_by: null,
	mod_reason_title: null,
	mod_reports: [],
	name: string,
	no_follow: boolean,
	num_comments?: number, // 43799316/367543312 (11.92%)
	num_reports: null,
	over_18?: boolean, // 43801844/367543312 (11.92%)
	parent_id: string,
	permalink: string,
	profile_img?: string, // 354048837/367543312 (96.33%)
	profile_over_18?: boolean, // 354048837/367543312 (96.33%)
	quarantine?: boolean, // 43801844/367543312 (11.92%)
	removal_reason: null|"legal",
	replies: "",
	report_reasons: null,
	retrieved_on: number,
	saved: boolean,
	score: number,
	score_hidden: boolean,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: "public"|"user"|"restricted"|"archived",
	top_awarded_type: null,
	total_awards_received: number,
	treatment_tags: [],
	unrepliable_reason: null,
	ups: number,
	user_reports: [],
}