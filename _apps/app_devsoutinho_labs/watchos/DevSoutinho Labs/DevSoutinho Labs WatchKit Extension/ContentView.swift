//
//  ContentView.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 29/06/22.
//
// Reference: https://www.youtube.com/watch?v=5wIfHyZuDsc&list=PLwnphfuyBZiDslkTCQ2Mg0nF0Z8u9NPbl&index=1


import SwiftUI

struct ContentView: View {
    @State private var isDialogVisible: Bool = false;
    

    var body: some View {
        ScrollView {
            VStack {
                NavigationLink(destination: DetailsScreenView()) {
                    Text("Navigation Link")
                }
                .padding(.vertical, 10.0)
                
                NavigationLink(destination: ListWithMemoryScreenView()) {
                    Text("List View")
                }
                .padding(.vertical, 10.0)

                Button {
                    isDialogVisible.toggle()
                } label: { Text("Dialog") }
                    .sheet(isPresented: $isDialogVisible, content: {
                        CreditsView(randomNumber: 10)
                    })
                
                Link("Link to Apple.com", destination: URL(string: "https://www.apple.com")!)
            }
        }.navigationTitle("DevSoutinho Labs")
        .foregroundColor(Color.blue)
        
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
