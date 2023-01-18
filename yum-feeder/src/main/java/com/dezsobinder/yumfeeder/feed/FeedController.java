package com.dezsobinder.yumfeeder.feed;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/feeder")
public class FeedController {
    private final FeedService feedService;


    @PostMapping("/feed")
    public ResponseEntity<FeedResponse> feedPet(@RequestBody Portion requestedPortion) throws InterruptedException {
        return ResponseEntity.ok(feedService.feed(requestedPortion.getPortionSize()));
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("test path for user roles");
    }
}
