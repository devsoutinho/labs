//
//  ContentView.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 29/06/22.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello!")
                .font(.title)
                .multilineTextAlignment(.center)
                .padding(.bottom, 10.0)
            Text("DevSoutinho Labs Watch")
                .font(.body)
                .multilineTextAlignment(.leading)
            Link("Apple.com", destination: URL(string: "https://www.apple.com")!)
        }
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
