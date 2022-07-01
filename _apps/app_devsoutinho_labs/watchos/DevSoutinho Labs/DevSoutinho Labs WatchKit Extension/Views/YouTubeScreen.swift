//
//  YouTubeScreen.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 01/07/22.
//

import SwiftUI

struct YouTubeScreen: View {
    var body: some View {
        VStack{
            Spacer()
            HStack(alignment: .center) {
                Text("DevSoutinho")
                VStack {
                    HStack {
                        Image(systemName: "play.fill")
                            .renderingMode(.original)
                            .foregroundColor(Color.white)
                            .padding(.horizontal, 8.0)
                            .padding(.vertical, 3.0)
                            .font(.system(size: 10, weight: .light))
                    }.background(Color.red)
                        .clipShape(Capsule())   
                }
                    
            }
            Spacer()
            AsyncImage(
                url: URL(string: "https://github.com/omariosouto.png"),
                content: { image in
                    image.resizable()
                         .aspectRatio(contentMode: .fit)
                         .frame(maxHeight: 100)
                         .clipShape(Circle())
                },
                placeholder: {
                    ProgressView()
                }
            )
            Text("Subscribers")
                .font(.footnote)
            Text("62k")
                .font(.title2)
            Spacer()
        }
    }
}

struct YouTubeScreen_Previews: PreviewProvider {
    static var previews: some View {
        YouTubeScreen()
    }
}
