//
//  DevSoutinho_LabsApp.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 29/06/22.
//

import SwiftUI

@main
struct DevSoutinho_LabsApp: App {
    @SceneBuilder var body: some Scene {
        WindowGroup {
            NavigationView {
                ContentView()
            }
        }

        WKNotificationScene(controller: NotificationController.self, category: "myCategory")
    }
}
