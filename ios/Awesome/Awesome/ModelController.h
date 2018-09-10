//
//  ModelController.h
//  Awesome
//
//  Created by Walaa Abu Lebdeh on 9/9/18.
//  Copyright © 2018 Walaa Abu Lebdeh. All rights reserved.
//

#import <UIKit/UIKit.h>

@class DataViewController;

@interface ModelController : NSObject <UIPageViewControllerDataSource>

- (DataViewController *)viewControllerAtIndex:(NSUInteger)index storyboard:(UIStoryboard *)storyboard;
- (NSUInteger)indexOfViewController:(DataViewController *)viewController;

@end

